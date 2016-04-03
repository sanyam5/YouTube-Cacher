# YouTube-Cacher
Cache the most frequently watched videos on your local machine/local network to save Internet Data.

How you can help
=================
There are several issues in this project and I would love if you could take time report the issues and suggest strategies to overcome them. Also if you find any descrepancy with the Install/Usage instructions in this readme, feel free to make pull request. Yo developers, lets make it big!

Install Instructions
======================

Installing the server
(might require sudo)
```
pip install django 
pip install youtube-dl
cd server
python manage.py migrate
```

Installing the plugin
***Only for chrome now***
Enable the "Developer mode" in Chrome and then load the plugin for it from `.plugin/chrome` directory

Running the server
==================
```
cd server
python manage.py runserver
```


