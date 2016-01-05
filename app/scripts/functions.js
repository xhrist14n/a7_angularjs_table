'use strict';

function activeMenu(id){
	var menus = [
                        'main', 
                        'http', 
                        'basic', 
                        'sort', 
                        'index', 
                        'special', 
                        'about'
                    ];
	for (var i in menus) {
		try {
                    if(menus[i]){
                                $("#" + menus[i]).removeClass("active");
                    }
		}catch(ex) {
		}
	}
    try{
        $("#" + id).addClass("active");
    }catch(ex){}
    return;	
}