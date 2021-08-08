# PLANNING

## Wireframe

![](./swapi_wireframe.jpg)

## Test Cases

1. When a USER visits the page:

   - a request is sent to the SWAPI for a list of 10 characters.
   - This list is displayed in a table.

2. When a USER enters text into the search input:
   - a request is sent to the SWAPI for matching characters.
   - Any matches are displayed in the table.
     - if no matches are found, a message saying so is displayed

## Steps to Complete

### BASIC SET UP

- `create-react-app` to generate the project
- install `react-bootstrap`
- install `bootstrap`
- install `axios`

### USER INTERFACE

- As a USER I want to see a header for the page
- As a USER I want to see a search input
- As a USER I want to see a table of characters
  - Read about HTML tables
  - Hard code a table in JSX
  - Add the expected table headers
  - Hard code a character into the table
  - break the table down into components:
    - `theader`
    - `tbody`
    - `character_row`? (name? idea?)
  - render these components together to display the table

### TEST CASE PSEUDO CODE

1. When a USER visits the page
   - make `axios` REQUEST to SWAPI for 10 characters
   - FOR EACH character returned, display a new `character_row`
     - IF no characters are returned:
       - Display `No matches found.`
2. When a USER enters text into the search input:
   - make `axios` REQUEST to SWAPI for matching characters
     - FOR EACH character returned:
       - display a new `character_row`
     - IF no characters are returned:
       - Display `No matches found.`

## Things I Did NOT Plan For Or Know About

## Googled
