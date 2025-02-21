/***************************************************************************
1.  NAME
     String manipulation program

 2.  DESCRIPTION

	C program that will manipulate a string of characters stored in main().

	Program will display a menu of different actions 
    and user may select what action program may perform to this string.

 3.  VERSIONS
       Original:
        25.03.2022 / juma
         
       Version history:
        12.12.2023 / Asghar
        11.10.2024 / Asghar


**********************************************************************/

/*-------------------------------------------------------------------*
*    HEADER FILES                                                    *
*--------------------------------------------------------------------*/
#include <stdio.h>
#include <string.h>
#include <stdlib.h>

/*-------------------------------------------------------------------*
*    GLOBAL VARIABLES AND CONSTANTS                                  *
*--------------------------------------------------------------------*/ 
/* Global constants */
#define FILE_NAME "string.txt"
#define S_MAX 200

/*-------------------------------------------------------------------*
*    FUNCTION PROTOTYPES                                             *
*--------------------------------------------------------------------*/

void display_menu(void);
char ask_command(void);
void read_string(char s[]);
void print_string(char s[]);
int count_vowels(char s[]);
int count_constants(char s[]);
void to_lower(char s[]);
void to_upper(char s[]);
void read_file(char s[]);
void write_file(char s[]);

/*********************************************************************
*    MAIN PROGRAM                                                      *
*********************************************************************/
int main()
{
    char str[S_MAX] = "This is deafault string from the code";
    char command;
    printf("WELCOME!\n");
        display_menu();
    for (;;) {
        command = ask_command();
        switch (command) {
        case 'A':
            printf("String has %d vowels\n", count_vowels(str));
            break;
        case 'B':
            printf("String has  %d constants\n", count_constants(str));
            break;
        case 'C':
            to_upper(str);
            print_string(str);
            break;
        case 'D':
            to_lower(str);
            print_string(str);
            break;
        case 'E':
            print_string(str);
            break;
        case 'F':
            read_string(str);
            break;
        case 'G':
            read_file(str);
            print_string(str);
            break;
        case 'H':
            write_file(str);
            printf("Write successful\n");
            break;
        case 'M':
            display_menu();
            break;
        case 'X':
            printf("Please dont't leave us :( ");
            exit(0);
        default:
            break;
        }
    }
    return 0;
}
/* end of main */
/*********************************************************************
*    FUNCTIONS                                                       *
**********************************************************************/
/*********************************************************************
    F U N C T I O N    D E S C R I P T I O N
---------------------------------------------------------------------
 NAME:display_menu
 DESCRIPTION: Function will display the following menu
    Input: main
    Output: void
*********************************************************************/
void display_menu() {
    printf("A) Count the number of vowels in the string\n");
    printf("B) Count the number of constants in the string\n");
    printf("C) Convert te string to uppercase\n");
    printf("D) Convert te string to lowercase\n");
    printf("E) Display the current string\n");
    printf("F) Enter another string\n");
    printf("G) Read string from file\n");
    printf("H) Write string to file\n");
    printf("M) Display this menu\n");
    printf("X) Exit the program\n");
}
/*********************************************************************
	F U N C T I O N    D E S C R I P T I O N
---------------------------------------------------------------------
 NAME: ask_command
 DESCRIPTION: Function to read command from user and clean the keyboard buffer
	Input: main
	Output: char
*********************************************************************/
char ask_command() {
    printf("Give Command: ");
    char s[8];
    fgets(s, 10, stdin);
    to_upper(s);
    if ((s[0] >= 65 && s[0] <= 73) || s[0] == 'M' || s[0] == 'X') {
        return s[0];
    }
}
/*********************************************************************
       F U N C T I O N    D E S C R I P T I O N
---------------------------------------------------------------------
 NAME: read_string
 DESCRIPTION: Function will print guide text (Give string:) and read string
			it works, but not perfectly.
     Input: main
     Output: void
*********************************************************************/
void read_string(char s[]) {
    printf("Give string: ");
    fgets(s, S_MAX, stdin);
}
/*********************************************************************
       F U N C T I O N    D E S C R I P T I O N
---------------------------------------------------------------------
 NAME: count_consonants
 DESCRIPTION: Function that counts and returns the number of consonants in the string.
     Input: main
     Output: int
*********************************************************************/
int count_constants(char s[]) {
    char lower_consts[20] = {'b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'z'};
    char upper_consts[20] = {'B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Z'};

    int count = 0;
    for (int i = 0; i < strlen(s); i++) {
        for (int j = 0; j < 20; j++) {
            if (s[i] == lower_consts[j] || s[i] == upper_consts[j]) {
                count += 1;
            }
        }
    }
    return count;
}
/*********************************************************************
     F U N C T I O N    D E S C R I P T I O N
----------------------------------------------------------------------
 NAME: print_string
 DESCRIPTION:Function will print current string
     Input: main
     Output: void
 *********************************************************************/
void print_string(char s[]) {
    printf("%s\n", s);
}
/*********************************************************************
      F U N C T I O N    D E S C R I P T I O N
---------------------------------------------------------------------
 NAME: count_vowels
 DESCRIPTION: Function that counts and returns the number of vowels in the string.
     Input: main
     Output: int
*********************************************************************/
int count_vowels(char s[]) {
    char vowels[12] = {'A', 'E', 'I', 'O', 'U', 'Y', 'a', 'e', 'i', 'o', 'u', 'y'};
    int count = 0;
    for (int i = 0; i < strlen(s); i++) {
        for (int j = 0; j < 12; j++) {
            if (s[i] == vowels[j]) {
                count += 1;
            }
        }
    }
    return count;
}

/*********************************************************************
       F U N C T I O N    D E S C R I P T I O N
---------------------------------------------------------------------
 NAME: write_file
 DESCRIPTION: Writes string to the file saves it in .txt format.
     Input: char string[]
     Output: void
*********************************************************************/
void write_file(char String[])
{
  char strr[S_MAX];
  FILE *fp;
  fp = fopen (FILE_NAME, "w");
  printf("\nWrite: \n");
  fgets(strr, S_MAX, stdin);
  fprintf(fp, "%s\n", strr);
  fclose(fp);
}
/*********************************************************************
       F U N C T I O N    D E S C R I P T I O N
---------------------------------------------------------------------
 NAME: to_lower
 DESCRIPTION: Function that converts the string to all lowercase.
     Input: main
     Output: void
*********************************************************************/
void to_lower(char s[]) {
    for (int i = 0; i < strlen(s); i++) {
        if (s[i] >= 65 && s[i] <= 90) {
            s[i] = s[i] + 32;
        }
    }
}
/*********************************************************************
       F U N C T I O N    D E S C R I P T I O N
----------------------------------------------------------------------
 NAME: to_upper
 DESCRIPTION: Function that converts the string to all uppercase.
     Input: main
     Output: void
*********************************************************************/
void to_upper(char s[]) {
    for (int i = 0; i < strlen(s); i++) {
        if (s[i] >= 97 && s[i] <= 122) {
            s[i] = s[i] - 32;BUFSIZ;
        }
    }
}
/*********************************************************************
       F U N C T I O N    D E S C R I P T I O N
---------------------------------------------------------------------
 NAME: read_file
 DESCRIPTION: Read the string from file. Filename may be hard coded in function
     Input: main
     Output: void
*********************************************************************/
void read_file(char s[]) {
    FILE *fp;
    fp = fopen(FILE_NAME, "r");
    if (fp == 0) {
        printf("File does not exist\n");
        exit(0);
    }
    else {
        fgets(s, S_MAX, fp);
    }
    fclose(fp);
}

