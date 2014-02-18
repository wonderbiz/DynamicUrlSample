DynamicUrlSample
================

Sample backbone.js application to demonstrate how different URLs can be created based on user selections.

user Interface
================
If you see the UI, it has 3 drop-down lists : Movie type, Language and location. Select your options and press Show Details button. Note that the results change based on the Language selection. We have primarilty 2 data models
1. English
2. Non-English

The URL (and the data changes based on this selection)

Key aspects of the application
1. formview.js : THis holds the basic form of the applications
2. Collections : These have 2 models - nonEnglishDataModel & EnglishDataModel

Collection has different URL for the datasource. We have json file for each model

router.js : This routes the call to the correct URL

