# gas-gmail2slackV2

A Google Apps Script that notifies Slack of emails that match a Gmail search query and marks the emails as read.
The search query, the room information to notify, and the sender's account are read from the spreadsheet.

---------
## Copy and use spreadsheet     

Here's how to copy and use the spreadsheet.    

* **Source spreadsheet**     
[gas-Gmail2SlackV2](https://docs.google.com/spreadsheets/d/12Co5NZw5OTAJnihjzZwsURCqbN9Gnb6Y9QiBzy37P10/edit?usp=sharing)   
The `Initial Settings` has been completed.

* **Permissions you need to grant**
The following permissions are required to execute the script.      
[![Image from Gyazo](https://i.gyazo.com/607204f188b8a94420a83b63feaad6d7.png)](https://gyazo.com/607204f188b8a94420a83b63feaad6d7)      

* **Slack notification image**      
After setting, the message of the following image is notified.     
[![Image from Gyazo](https://i.gyazo.com/aeb8c71c16419bb7a0498b0bb471e3e0.png)](https://gyazo.com/aeb8c71c16419bb7a0498b0bb471e3e0)     

### Usage        
Describes how to use it.

#### Enable Incoming Webhooks, get and set URL      
Enable Incoming Webhooks and get the URL to populate the spreadsheet.    

* Enable Incoming Webhooks    
Use Incoming Webhooks to notify Slack channels.
Currently, there are old-style Incoming Webhooks and new-style Imcoming Webhooks, and this spreadsheet works with the old-style.
The following article was easy to understand about the setting procedure of the old method.      
[SlackのIncoming Webhooksを使い倒す - Qiita](https://qiita.com/ik-fib/items/b4a502d173a22b3947a0)          

* Set URL to spreadsheet        
From the menu, select `gas-Gmail2Slack`, then click `Initial Settings`, `Webhook URL Settings`.       
[![Image from Gyazo](https://i.gyazo.com/0bfa295b9a762580941270fd7b7d9796.png)](https://gyazo.com/0bfa295b9a762580941270fd7b7d9796)     
A dialog will be displayed, so set the URL of the issued webhook.       
[![Image from Gyazo](https://i.gyazo.com/417dd2e1c2dc10d9fd45e85a26b4d2a6.png)](https://gyazo.com/417dd2e1c2dc10d9fd45e85a26b4d2a6)        

### In the Config sheet, enter the Gmail information to be notified and the Slack channel to be notified.         
The column contents of the Config sheet are explained.       

* **Tag**
Enter a one-line comment.
Slack will be notified as a `tag`.
    * Example        
    Google Search Console

* **Channel**     
Enter the Slack channel name of the notification destination. `#` is the beginning.      
    * Example            
    `#gsc`

* **SendTo**         
It will be the Slack account name of the recipient.
    * Example         
    `@monotalk_xyz`    

* **Message body length**         
Enter the length of the email body. If you want to display only the title, enter `0` to display only the title.              
    * Example                  
    `1000`
    
* **Query**   
Set up a Gmail search query. Chat messages sent by Slack on Google Apps Script side are marked as read, so if you add `is:unread`, only unread messages will be notified.      
[Search operators you can use with Gmail - Gmail Help](https://support.google.com/mail/answer/7190?hl=en) describes what search operators are available.      
    * Example          
    `is:unread label:google-search-console`     

#### Schedule execution settings
From the menu, select `gas-Gmail2Slack` and click `Initial Settings`, `Schedule Run`.     
[![Image from Gyazo](https://i.gyazo.com/d57a097334511b9396b71c83bfa42168.png)](https://gyazo.com/d57a097334511b9396b71c83bfa42168)          
In the dialog, set the execution schedule. If you choose `every hour`, the script will be run every hour and Slack will be notified by email.       
[![Image from Gyazo](https://i.gyazo.com/2a21946bb5a96e2739d3883a7eac4b97.png)](https://gyazo.com/2a21946bb5a96e2739d3883a7eac4b97)             

--------------------

## Clone Github repository and build       

### Install clasp         
You will need to install clasp to deploy the container binding script.
For the installation of clasp, you may find the following articles helpful.     
[google/clasp: 🔗 Command Line Apps Script Projects](https://github.com/google/clasp)    


* Install clasp
```console
npm i @google/clasp -g　　　　
```

* clasp login        
```console
clasp login    
```

### Clone the Git repository, create a new spreadsheet, build Google Apps Script and push.       

* Git clone     
```console
git clone https://github.com/kemsakurai/gas-Gmail2SlackV2.git <project_name>
```

* nom install    
```console
cd <project_name>
npm install
```

* Create a new spreadsheet          
To create a new spreadsheet, run `npm run setup`.
Execute command to initialize .clasp.json and create a spreadsheet.    
```console
npm run setup 
```

* Deploy container bind script     
```console
npm run deploy
```

This will create a spreadsheet called `gas-Gmail2SlackV2` in G Suite.       

### Copy and use pre-built resources
If the public spreadsheet cannot be copied with the G Suite security settings and you have trouble building and deploying it,  [gas-Gmail2Slack/dist at master · kemsakurai/gas-Gmail2Slack](https://github.com/kemsakurai/gas-Gmail2Slack/tree/master/dist) as a container binding script.      

---------
## LICENCE     

MIT

