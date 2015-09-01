var mdfs = Npm.require('mdfs');

var template = ["p",
                "  | hello world"].join("\n");

var wrapInTemplate = function(tplName, template) {
  return "template(name='"+tplName+"')\n  " + template.replace("\n", "\n  ");
};

Tinytest.add("JadeCompiler - parse templates", function(test) {
  test.equal(JadeCompiler.parse(template), { children: ["hello world"] });
});

Tinytest.add("JadeCompiler - parse files", function(test) {
  test.throws(
    function(){ JadeCompiler.parse(template, {fileMode: true}); },
    "Tag must be in a template on line 1");

  var template2 = wrapInTemplate("hello", template);
  test.equal(JadeCompiler.parse(template2, {fileMode: true}), {
    head: null,
    body: null,
    bodyAttrs: {},
    templates: {
      hello: { children: ["hello world"] }
    }
  });
});

Tinytest.add("JadeCompiler - compile templates", function(test) {
  test.equal(JadeCompiler.compile(template),
  "(function() {\n  return HTML.P(\"hello world\");\n})");
});

var __dirname = process.env['JADE_COMPILER_CASES']
if (!__dirname)
{
  Tinytest.add("JadeCompiler - cases", function(test) {
    test.fail('configure JADE_COMPILER_CASES environment variable');
  });
}
else {
  mdfs.search(__dirname, function (md) {
    var title =  md.mdfs.title;
    var source = md['file.jade'];
    var expected = md['file.blaze'];
    var expected_error = md['throw'];

    if (title) {
      var test_name = "JadeCompiler - "+ md.mdfs.subfolder + md.mdfs.title
      //var test_name = "cJadeCompiler - "+JSON.stringify(md,null,2)+ md.mdfs.title
      //var test_name = "cJadeCompiler - "+expected_error+ md.mdfs.title
      Tinytest.add(test_name, function(test) {
        if (expected_error)
        {
          var err={message: 'No error'};
          try{
            JadeCompiler.compile(source);
          }
          catch(e){
            err=e;
          }
          if (err.message.indexOf(expected_error)==-1)
            test.equal(err.message, expected_error);
        }
        else {
          var actual=JadeCompiler.compile(source);
          test.equal(actual, expected);
        }
      });
    }
    else {
      Tinytest.add("JadxeCompiler - "+md.mdfs.fullname, function(test) {
        test.fail(JSON.stringify(md,null,2));
      });
    }
  });
}
