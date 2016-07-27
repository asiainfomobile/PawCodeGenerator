  (function(root) {
      var ref;
      if ((ref = root.bundle) != null ? ref.minApiVersion('0.2.0') : void 0) {
          return root.Mustache = require("./mustache");
      } else {
          return require("mustache.js");
      }
  })(this);

  var MyCodeGenerator = function() {

      this.generate = function(context, requests, options) {
          var generated = "";

          var method, request, template, view;
          request = context.getCurrentRequest();
          method = request.method.toUpperCase();


          // define your view
          var view = {
              "request": request,
          };

          // render the template
          template = readFile("my-template.mustache");
          generated = Mustache.render(template, view);

          return generated;
      }
  }

  MyCodeGenerator.identifier = "com.ai.MyCodeGenerator";
  MyCodeGenerator.title = "SBOSS 接口代码生成器";
  registerCodeGenerator(MyCodeGenerator)
