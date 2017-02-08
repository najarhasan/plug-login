# plug-login
Pluglable Login page  with Angularjs 

How to use plug-login in your application Please find below steps

Two type of plug-login are there

1. plug with html 
2. plug with External html

1. plug with Html (steps):-

  step1 : add plug-login-with-html.js in your index.html.
          
            <script type='text/javascript' src="/plug-login-with-html.js"></script>
            
  step2 : Inject this in your application.
  
            var app = angular.module('application', ['plug-login']);
            
  step3 : After that make one Div and call directive.
    
            <div login-form></div>
            
 --------------------------------------------------------------------------------------------------------------------------------
 Note : make sure your post service url is /auth/login If you want to change this url as per your requirement then go to plug-login-with-html.js and change your url.
 --------------------------------------------------------------------------------------------------------------------------------
 
 2. plug with External html
 
   step1 : add plug-login-with-external-html.js in your index.html.
          
            <script type='text/javascript' src="/plug-login-with-external-html.js"></script>
            
  step2 : Inject this in your application.
  
            var app = angular.module('application', ['plug-login']);
            
  step3 : After that make one Div and call directive and make sure there are two more parameter.
          
          1. first give Id to your div.
          
              <div id="logintest"></div>
              
          2. then use directive with that and pass two more paramter div-id (provide div Id which you want to include your login html)    and html-name (provide html name with your path).
          
              <div id="logintest" login-form div-id="logintest" htmlName="htmlTemplates/login.html"></div>
              
     -------------------------------------------------------------------------------------------------------------------------------
    
          
