/********************************************************************************************************\
*                                                                                                        *
*  ./+++++++++++++++++++++/.                      `..                    `..     `..    `..              *
*  +ooooooooooooooo++/ooooo/                      -oo.                   +oo     /oo    -oo-             *
*  +ooooooooooooo`    /oooo/                       ``                    +oo     ```    -oo-             *
*  ++:---:ooooooo.    .oooo/     -:-`        .:-` .::`  `------------`   +oo     -:-    -oo-.-:://:-`    *
*  +/     oooo++o/     /ooo/     -oo/       `oo+  :oo.  `/////////ooo-   +oo     +oo    -oo++/:::/+oo-   * 
*  +/     o:.```-o.    .ooo/      :oo-     `+o+`  :oo.          ./o+-    +oo     +oo    -oo:      `/oo.  *
*  +/     o/     +/     /oo/       /oo.    /oo.   :oo.        ./o+-`     +oo     +oo    -oo-       -oo:  *
*  +/     oo`    -o.    .oo/       `+o+`  -oo-    :oo.      ./o+-`       +oo     +oo    -oo-       .oo:  *
*  +/     oo/     +/     +o/        .oo/ .oo:     :oo.    ./o+-`         +oo     +oo    -oo-       -oo-  *
*  +/     ooo`    -o.    .o/         -oo:+o/      :oo.  ./o+-`           +oo.    +oo    -oo-      .+o+`  *
*  +/     ooo:  `.-o/  `.-o/          :ooo+`      :oo.  /oooooooooooo+   .+oo+:  +oo    .ooo+///++oo/`   *
*  .//////++++//+++++//+++/.           `..        `..    `...........`     `..`  `..      `.-----.`  	 *
*                                                                                                        *
*                                            www.vizlib.com                                              *
*                                                                                                        *
*                          Copyright 2017 © Vizlib Ltd. - All rights reserved                            *
\********************************************************************************************************/


requirejs.config({
  paths: {
    'vzb_VizlibTable': ['https://vizlib-bouncer.herokuapp.com/get?key=axa3211q7h13ndygb9-alhi358x8jymygb9-diqdcedi53lus7nwmi-yh4xpw0t36x3zbyb9&type=js&extension=VizlibTable&version=auto&end', '/extensions/VizlibTable/resources/vizliberror']
  }
});

define(['vzb_VizlibTable'],function(vizlib){
	if(!vizlib.hasOwnProperty('vizlibError'))
		require(['css!https://vizlib-bouncer.herokuapp.com/get?key=axa3211q7h13ndygb9-alhi358x8jymygb9-diqdcedi53lus7nwmi-yh4xpw0t36x3zbyb9&type=css&extension=VizlibTable&version=auto&end']);			
	return vizlib;
});
