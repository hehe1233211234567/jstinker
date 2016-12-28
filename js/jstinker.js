$("document").ready(function() {
    var libs = {};
    
    // List of Frameworks & Extensions
    var frameworks = {
        // jQuery
        "jQuery 2.1.0": "./platform/js/jquery-2.1.0.js",
        "jQuery 2.0.2": "./platform/js/jquery-2.0.2.js",
        "jQuery 1.10.1": "./platform/js/jquery-1.10.1.js",
        "jQuery 1.9.1": "./platform/js/jquery-1.9.1.js",
        "jQuery 1.8.3": "./platform/js/jquery-1.8.3.js",
        "jQuery 1.7.2": "./platform/js/jquery-1.7.2.js",
        "jQuery 1.6.4": "./platform/js/jquery-1.6.4.js",
        // Prototype
        "Prototype 1.7.1": "./platform/js/prototype-1.7.1.js",
        // YUI
        "YUI 3.17.2": "./platform/js/yui-3.17.2.js",
        // Dojo
        "Dojo 1.10.1": "./platform/js/dojo-1.10.1.js",
        // Processing.js
        "Processing.js 1.4.7": "./platform/js/processing-1.4.7.js",
        // ExtJS
        "ExtJS 4.2.0": "./platform/js/ext-4.2.0.js",
        // Raphael
        "Raphael 2.1.0": "./platform/js/raphael-2.1.0.js",
        // RightJS
        "RightJS 2.3.1": "./platform/js/right-2.3.1.js",
        // Three.js
        "Three.js r54": "./platform/js/three-r54.js",
        // Zepto
        "Zepto 1.0rc1": "./platform/js/zepto-1.0rc1.js",

        // Knockout.js
        "Knockout.js 3.0.0": "./platform/js/knockout-3.0.0.js",
        "Knockout.js 2.3.0": "./platform/js/knockout-2.3.0.js",
        // The X Toolkit
        "The X Toolkit edge": "./platform/js/xtk_edge.js",
        // AngularJS
		"AngularJS 2.0.0": "./platform/js/angular-2.0.0.js",
		"AngularJS 1.5.1": "./platform/js/angular-2.0.0.js",
		"AngularJS 1.4.1": "./platform/js/angular-2.0.0.js",
		"AngularJS 1.3.1": "./platform/js/angular-2.0.0.js",

        // React
        "React 0.9.0": "./platform/js/react-0.9.0.js",
        
        // RactiveJS
        "RactiveJS 0.8.1": "./platform/js/ractive-0.8.1.js",
        // Vue
        "Vue 0.11.0": "./platform/js/vue-0.11.0.js"
    };
    
    var frameworks_css = {
        "jQuery UI 1.10.3": "./platform/css/jquery-ui-1.10.3.css",
        "Bootstrap 3.2.0": "./platform/css/bootstrap.min-3.2.0.css",
        "Bootstrap 2.3.2": "./platform/css/bootstrap-combined.min-2.3.2.css",
        "jQuery UI 1.9.2": "./platform/css/jquery-ui-1.9.2.css"
    };
    
    var frameworks_extras = {
        "jQuery 2.1.0": {
            "Bootstrap 3.2.0": "./platform/js/bootstrap.min-3.2.0.js", 
            "Bootstrap 2.3.2": "./platform/js/bootstrap.min-2.3.2.js"
        },
        "jQuery 2.0.2": {
            "Migrate 1.2.1": "./platform/js/jquery-migrate-1.2.1.js",
            "jQuery UI 1.10.3": "./platform/js/jquery-ui-1.10.3.js"
        },
        "jQuery 1.9.1": {
            "Migrate 1.1.0": "./platform/js/jquery-migrate-1.1.0.js",
            "jQuery UI 1.9.2": "./platform/js/jquery-ui-1.9.2.js"
        },
        "Prototype 1.7.1": {
            "script.aculo.us 1.9": "./platform/js/scriptaculous-1.9.js",
            "Scripty 2.0b1": "./platform/js/s2-b.js"
        },
        "React 0.8.0": {
            "JSXTransformer.js 0.8.0": "./platform/js/JSXTransformer-0.8.0.js"  
        }
    };
    
    // Frameworks & Extensions Dropdown
    $("#dropdownMenu1 li a").click(function(event){
        event.preventDefault();
        
        $(".extra").remove();
        
        var dropdown = $(this).parents('.btn-group');
        
        var selText = $(this).text();
        dropdown.find('.dropdown-toggle').html(selText + ' <span class="caret"></span>');
        
        var lib_extras = frameworks_extras[selText];
        
        for (extra in lib_extras)
            dropdown.append("<div class='extra checkbox'><label><input type='checkbox'></input><span class='chk_lbl'>" + extra + "</span></label></div>");
    });
    
    // Script Injection Dropdown
    $("#dropdownMenu2 li a").click(function(event){
        event.preventDefault();
        
        var dropdown = $(this).parents('.btn-group');
        
        var selText = $(this).text();
        dropdown.find('.dropdown-toggle').html(selText + ' <span class="caret"></span>');
    });
    
    // Doctype Dropdown
    $("#dropdownMenu3 li a").click(function(event){
        event.preventDefault();
        
        var dropdown = $(this).parents('.btn-group');
        
        var selText = $(this).text();
        dropdown.find('.dropdown-toggle').html(selText + ' <span class="caret"></span>');
    });
    
    // HTML Dropdown
    $("#dropdownMenu4 li a").click(function(event){
        event.preventDefault();
        
        var dropdown = $(this).parents('.btn-group');
        
        var selText = $(this).text();
        dropdown.find('.dropdown-toggle').html(selText + ' <span class="caret"></span>');
    });
    
    // CSS Dropdown
    $("#dropdownMenu5 li a").click(function(event){
        event.preventDefault();
        
        var dropdown = $(this).parents('.btn-group');
        
        var selText = $(this).text();
        dropdown.find('.dropdown-toggle').html(selText + ' <span class="caret"></span>');
    });
    
    // Javascript Dropdown
    $("#dropdownMenu6 li a").click(function(event){
        event.preventDefault();
        
        var dropdown = $(this).parents('.btn-group');
        
        var selText = $(this).text();
        dropdown.find('.dropdown-toggle').html(selText + ' <span class="caret"></span>');
    });
    
    // RUN Button
    $("#btnRun").click(function(event) {  
        event.preventDefault();
        
        var previewDoc = window.frames[0].document;
        
        var css    = ace.edit("css-editor").getSession().getValue();
        var script = ace.edit("js-editor").getSession().getValue();
        var html   = ace.edit("html-editor").getSession().getValue();
        
        var dropdownMenu1Sel = $("#dropdownMenu1").parents('.btn-group').find('.dropdown-toggle').text().trim();
        var lib = frameworks[dropdownMenu1Sel];
        var extra_libs = []
        $("#dropdownMenu1").parents('.btn-group').find('input:checked').parent().each( 
            function(){ extra_libs.push($(this).text().trim());}
        );
        var dropdownMenu2Sel = $("#dropdownMenu2").parents('.btn-group').find('.dropdown-toggle').text().trim();
        
        previewDoc.write("<!DOCTYPE html>");
        previewDoc.write("<html>");
        previewDoc.write("<head>");
        previewDoc.write("<style type='text/css'>" + css + "</style>");
        if (lib)
            previewDoc.write("<script src=" + lib + " type='text/javascript'></script>");
        for (var i in extra_libs)
        {
            if (extra_libs[i] in frameworks_css)
                previewDoc.write("<style type='text/css' src=" + frameworks_css[extra_libs[i]] + "></style>");
            
            if (lib in frameworks_extras)
                previewDoc.write("<script src=" + frameworks_extras[lib][extra_libs[i]] + " type='text/javascript'></script>");
        }
        if (dropdownMenu2Sel == "onLoad")
            previewDoc.write("<script type='text/javascript'>window.onload = function() {" + script + "}</script>");
        //else if (dropdownMenu2Sel == "onDomready")
        //    
        else if (dropdownMenu2Sel == "No wrap - in head")
            previewDoc.write("<script type='text/javascript'>" + script + "</script>");
        previewDoc.write("</head>");
        previewDoc.write("<body>");
        previewDoc.write(html);
        if (dropdownMenu2Sel == "No wrap - in body")
            previewDoc.write("<script type='text/javascript'>" + script + "</script>");
        previewDoc.write("</body>");
        previewDoc.write("</html>");
        previewDoc.close();
    });
    
    // Preview code on page load
    $("#btnRun").click();
    
    // TIDYUP Button
    $("#btnTidyUp").click(function(event) {
        event.preventDefault();
        
        var html = ace.edit("html-editor").getSession().getValue();
        var html2 = style_html(html);
        
        ace.edit("html-editor").getSession().setValue(html2);
        
        var css = ace.edit("css-editor").getSession().getValue();
        var css2 = css_beautify(css);
        
        ace.edit("css-editor").getSession().setValue(css2);
        
        var js = ace.edit("js-editor").getSession().getValue();
        var js2 = js_beautify(js);
        
        ace.edit("js-editor").getSession().setValue(js2);
    });

    // Together Button
    $("#btnTogether").click(function(event) {
      event.preventDefault();

      TogetherJS(this);
      return false;
    });
});
