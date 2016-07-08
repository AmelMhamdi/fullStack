'use strict';
app.config( 
    function ($routeProvider) { 
        $routeProvider.when('/Accueil', { 
            templateUrl: "html/Accueil.html", controller: 'AccueilControleur' 
        })
        .when('/Authentification', { 
            templateUrl: "html/Authentification.html", 
            controller: 'CompteControleur' 
        }) 
        .when('/BesoinAide', { 
            templateUrl: "html/BesoinAide.html", 
            controller: 'BesoinAideControleur' 
        })
        .when('/Contact', { 
            templateUrl: "html/Contact.html", 
            controller: 'ContactControleur' 
        }) 
        .when('/Detail/:Id', { 
            templateUrl: "html/Detail.html", 
            controller: 'DetailControleur' 
        })
        .when('/LesLivres/:Category?', {
            templateUrl: "html/Livres.html",
            controller: 'LivresControleur'
        })
            .otherwise
            ({
                redirectTo: '/Accueil'
            });
        }
    );