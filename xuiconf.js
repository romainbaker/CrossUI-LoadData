

// [[Page Appearance
xui.ini.$PageAppearance = {
    "theme" : "default"
};
// ]]Page Appearance


// [[Font Icons CDN

// ]]Font Icons CDN


// [[Develop Env Setting
xui.ini.$DevEnv = {
    "designViewConf" : {
        "width" : 800,
        "height" : 600
    }
};
// ]]Develop Env Setting


// [[Global Functions
xui.$cache.functions = {
    "test" : {
        "desc" : "",
        "params" : [
            {
                "id" : "num1",
                "type" : "Number",
                "desc" : ""
            },
            {
                "id" : "num2",
                "type" : "Number",
                "desc" : ""
            }
        ],
        "actions" : [
            function(num1, num2){
                return num1 + num2;
            }
        ]
    }
};
// ]]Global Functions
