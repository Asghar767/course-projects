import random
import numpy as np
import sys
import game

# Define constants for moves
UP, DOWN, LEFT, RIGHT = 0, 1, 2, 3

# Initialize a variable to track the number of consecutive repeated moves
consecutive_repeated_moves = 0
previous_move = None

def find_best_move(board):
    global consecutive_repeated_moves, previous_move  # Declare previous_move as a global variable

    # List of all possible moves
    moves = [UP, DOWN, LEFT, RIGHT]

    # Remove the previous move from the list of possible moves
    if previous_move in moves:
        moves.remove(previous_move)

    best_move = -1
    best_score = -1

    for move in moves:
        new_board = execute_move(move, board)

        # Check if the new board is the same as the current board
        if not board_equals(new_board, board):
            score = evaluate_board(new_board)

            if score > best_score:
                best_score = score
                best_move = move

    # Check if the best move is the same as the previous move
    if best_move == previous_move:
        consecutive_repeated_moves += 1
    else:
        consecutive_repeated_moves = 0

    # If the same move occurs three times in a row, choose a random move
    if consecutive_repeated_moves >= 2:
        possible_moves = [move for move in [UP, DOWN, LEFT, RIGHT] if move != best_move]
        best_move = random.choice(possible_moves)

    # Update the previous move
    previous_move = best_move

    return best_move

def evaluate_board(board):
    # Heuristic evaluation function
    empty_cells = count_empty_cells(board)
    max_tile = np.max(board)

    # More empty cells are better, so give them a higher score
    score = empty_cells * 2  # You can adjust the weight as needed

    # Higher value tiles at the corners are preferable
    score += corner_score(board)

    # Tiles with the same value adjacent to each other are preferable
    score += merge_score(board)

    return score

def count_empty_cells(board):
    return np.count_nonzero(board == 0)

def corner_score(board):
    corners = [board[0, 0], board[0, -1], board[-1, 0], board[-1, -1]]
    return max(corners) * 0.5
    
def execute_move(move, board):
    """
    move and return the grid without a new random tile 
	It won't affect the state of the game in the browser.
    """

    if move == UP:
        return game.merge_up(board)
    elif move == DOWN:
        return game.merge_down(board)
    elif move == LEFT:
        return game.merge_left(board)
    elif move == RIGHT:
        return game.merge_right(board)
    else:
        sys.exit("No valid move")

def merge_score(board):
    merged_board = np.copy(board)
    score = 0

    # Iterate through the rows and columns to check for potential merges
    for row in range(board.shape[0]):
        for col in range(board.shape[1]):
            current_tile = board[row, col]

            if current_tile != 0:
                # Check if there are adjacent tiles with the same value
                # Up
                if row > 0 and merged_board[row - 1, col] == current_tile:
                    score += current_tile
                    merged_board[row - 1, col] *= 2
                    merged_board[row, col] = 0
                # Down
                elif row < board.shape[0] - 1 and merged_board[row + 1, col] == current_tile:
                    score += current_tile
                    merged_board[row + 1, col] *= 2
                    merged_board[row, col] = 0
                # Left
                elif col > 0 and merged_board[row, col - 1] == current_tile:
                    score += current_tile
                    merged_board[row, col - 1] *= 2
                    merged_board[row, col] = 0
                # Right
                elif col < board.shape[1] - 1 and merged_board[row, col + 1] == current_tile:
                    score += current_tile
                    merged_board[row, col + 1] *= 2
                    merged_board[row, col] = 0

    return score * 2
		
def board_equals(board, newboard):
    """
    Check if two boards are equal
    """
    return  (newboard == board).all()  