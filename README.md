# CCNY Chatbot

Group project for Senior Project Design where we are creating an interactive chatbot for The City College of New York website (https://www.ccny.cuny.edu).

## Team Members

1. Cindy Weng Zhu
2. David Jimenez
3. Sheriff Sanni
4. Nahin Imtiaz
5. Sajid Mahmud

# Project Architecture
*The main repository https://github.com/cindyweng18/ccnychatbot had exceeded the bandwidth limit available. As a result we were forced to divide the client-side and server-side into two seperate repositories.*
The CCNY Chatbot project uses ReactJS and Django collaboratively to host the client and the server respectively. To that end, follow the following instructions to make sure the necessary components are installed on your system.

# Setting Up Installation
This readme includes the installation and running instructions for **both** the server and client. Following these instructions properly will install the entire project.
You must have **Node.js and NPM** (Node Project Manager) installed to run the React portion of the project. Also the Django back-end requires that you have **Python** installed on your operating system.
Download **Node.js** (includes NPM) [here](https://nodejs.org/en/)
Download **Python** [here](https://www.python.org/downloads/release/python-3101/)

# Setting Up Your Local Repository

_The following assumes [Git](https://github.com/git-guides/install-git) is installed on your operating system_

1. In your Git terminal navigate to the directory in which you would like to save the client and server (for simplicity, save 'Janus_server' folder and the 'Janus_client' folder into a folder named 'ccnychatbot')
*Cloning the server*
2. Run the following command: 'git clone https://github.com/sajidmahmud69/Janus_server.git'
*Cloning the client*
3. Once again navigate to the project directory by running the following: 'cd ./ccnychatbot', then run the following command: 'git clone https://github.com/sajidmahmud69/Janus_client.git'

**Note: The remaining steps assume you heeded the advice in step 1, and have the 'Janus_server' and 'Janus_client' folders saved into a folder named 'ccnychatbot.'**
4. Navigate to the project folder by running the following: 'cd ./ccnychatbot'
5. Run the following command to install the proper dependencies: 'npm install'
6. You may also have to install the Django corsheader module. Do so with the following command: 'pip install django-cors-headers'

# Running the Project Locally

You must first open two terminals at two different directories. One in ('...ccnychatbot\Janus_server'), and another in ('...ccnychatbot\Janus_client').

1. Firstly, in the terminal opened to ('...ccnychatbot\Janus_server'), run the following command to run the server: 'python manage.py runserver 8000'
   _(The '8000' refers to the port number and may be replaced as you wish, however, the server and client cannot be hosted on the same port number)_
2. In the terminal opened to ('...ccnychatbot\Janus_client'), run the following command to run the client: 'npm start'
3. The webapp should open up in a tab on your default browser. Click the icon in the bottom right and ask away!
