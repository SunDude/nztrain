// ----------------------------------------------------------------------------
// markItUp!
// ----------------------------------------------------------------------------
// Copyright (C) 2008 Jay Salvat
// http://markitup.jaysalvat.com/
// ----------------------------------------------------------------------------
myMarkdownSettings={nameSpace:"markdown",previewTemplatePath:"/markitup/previews.html",previewParserPath:"/markitup/parsers/markdown",onShiftEnter:{keepDefault:!1,openWith:"\n\n"},markupSet:[{name:"First Level Heading",key:"1",placeHolder:"Your title here...",closeWith:function(a){return miu.markdownTitle(a,"=")}},{name:"Second Level Heading",key:"2",placeHolder:"Your title here...",closeWith:function(a){return miu.markdownTitle(a,"-")}},{name:"Heading 3",key:"3",openWith:"### ",placeHolder:"Your title here..."},{name:"Heading 4",key:"4",openWith:"#### ",placeHolder:"Your title here..."},{name:"Heading 5",key:"5",openWith:"##### ",placeHolder:"Your title here..."},{name:"Heading 6",key:"6",openWith:"###### ",placeHolder:"Your title here..."},{separator:"---------------"},{name:"Bold",key:"B",openWith:"**",closeWith:"**"},{name:"Italic",key:"I",openWith:"_",closeWith:"_"},{separator:"---------------"},{name:"Bulleted List",openWith:"- "},{name:"Numeric List",openWith:function(a){return a.line+". "}},{separator:"---------------"},{name:"Picture",key:"P",replaceWith:'![[![Alternative text]!]]([![Url:!:http://]!] "[![Title]!]")'},{name:"Link",key:"L",openWith:"[",closeWith:']([![Url:!:http://]!] "[![Title]!]")',placeHolder:"Your text to link here..."},{separator:"---------------"},{name:"Quotes",openWith:"> "},{name:"Code Block / Code",openWith:"(!(\t|!|`)!)",closeWith:"(!(`)!)"},{separator:"---------------"},{name:"Preview",call:"preview",className:"preview"}]},miu={markdownTitle:function(a,b){heading="",n=$.trim(a.selection||a.placeHolder).length;for(i=0;i<n;i++)heading+=b;return"\n"+heading+"\n"}};