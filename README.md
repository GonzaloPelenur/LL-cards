# LL-cards

## Run
First run the command ```npm run dev```. Then naviate on your browser to ```http://localhost:3000/``` to view the webpage.

## Enviromental Variables
Create a .env file on the source directory. File should contain the following:
```
AIRTABLE_API_KEY=(your key)
AIRTABLE_MENU_BASE=(base id)
```
To get an API key, navigate to your Airtable developer hub and create a key under the "API key" tab.

The base id can be found on the airtable base url, it is a string starting with app and followed by random characters.

## Tasks
The tasks webpage can be found under ```http://localhost:3000/tasks```. It contains cards showcasing available tasks.

## LLUF
The LLUF webpage can be found under ```http://localhost:3000/LLUF```. It contains cards showcasing information on LLUFs.