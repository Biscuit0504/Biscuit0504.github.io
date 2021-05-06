(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{101:function(n,e,t){"use strict";t.r(e),t.d(e,"frontMatter",(function(){return c})),t.d(e,"metadata",(function(){return g})),t.d(e,"toc",(function(){return l})),t.d(e,"default",(function(){return o}));var i=t(3),a=t(7),r=(t(0),t(113)),c=(t(112),{slug:"git",title:"Git\u547d\u4ee4\u8bb0\u5f55",author:"\u5c0f\u732a\u61a8\u61a8",author_title:"\u524d\u7aef\u5de5\u7a0b\u5e08",tags:["\u5de5\u5177","utils"]}),g={permalink:"/git",source:"@site/blog/2021-01-05-git.md",description:"git\u547d\u4ee4\u8bb0\u5f55",date:"2021-01-05T00:00:00.000Z",tags:[{label:"\u5de5\u5177",permalink:"/tags/\u5de5\u5177"},{label:"utils",permalink:"/tags/utils"}],title:"Git\u547d\u4ee4\u8bb0\u5f55",readingTime:6.395,truncated:!0,prevItem:{title:"\u642d\u5efa\u524d\u7aef\u811a\u624b\u67b6\u5de5\u5177\u5e76\u53d1\u5e03npm\u5305",permalink:"/npm Plugin"},nextItem:{title:"\u524d\u7aef\u9762\u8bd5\u8bd5\u98981",permalink:"/mianshi"}},l=[{value:"git\u547d\u4ee4\u8bb0\u5f55",id:"git\u547d\u4ee4\u8bb0\u5f55",children:[{value:"\u65b0\u5efa",id:"\u65b0\u5efa",children:[]},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",children:[]},{value:"\u5e2e\u52a9",id:"\u5e2e\u52a9",children:[]},{value:"\u72b6\u6001",id:"\u72b6\u6001",children:[]},{value:"\u4fe1\u606f",id:"\u4fe1\u606f",children:[]},{value:"\u6dfb\u52a0",id:"\u6dfb\u52a0",children:[]},{value:"\u5220\u9664",id:"\u5220\u9664",children:[]},{value:"\u5206\u652f",id:"\u5206\u652f",children:[]},{value:"\u68c0\u51fa",id:"\u68c0\u51fa",children:[]},{value:"\u64a4\u9500",id:"\u64a4\u9500",children:[]},{value:"commit",id:"commit",children:[]},{value:"diff",id:"diff",children:[]},{value:"grep",id:"grep",children:[]},{value:"log",id:"log",children:[]},{value:"merge",id:"merge",children:[]},{value:"mv",id:"mv",children:[]},{value:"tag",id:"tag",children:[]},{value:"pull",id:"pull",children:[]},{value:"ci",id:"ci",children:[]},{value:"rebase (\u8c28\u614e\u4f7f\u7528)",id:"rebase-\u8c28\u614e\u4f7f\u7528",children:[]},{value:"reset (\u8c28\u614e\u4f7f\u7528)",id:"reset-\u8c28\u614e\u4f7f\u7528",children:[]},{value:"\u5176\u4ed6",id:"\u5176\u4ed6",children:[]},{value:"\u53c2\u8003",id:"\u53c2\u8003",children:[]}]}],b={toc:l};function o(n){var e=n.components,t=Object(a.a)(n,["components"]);return Object(r.b)("wrapper",Object(i.a)({},b,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"git\u547d\u4ee4\u8bb0\u5f55"},"git\u547d\u4ee4\u8bb0\u5f55"),Object(r.b)("p",null,"\u2003","\u2003","Git \u662f\u4e00\u4e2a\u5f00\u6e90\u7684\u5206\u5e03\u5f0f\u7248\u672c\u63a7\u5236\u7cfb\u7edf\uff0c\u7528\u4e8e\u654f\u6377\u9ad8\u6548\u5730\u5904\u7406\u4efb\u4f55\u6216\u5c0f\u6216\u5927\u7684\u9879\u76ee\u3002\u5728\u65e5\u5e38\u7684\u5de5\u4f5c\u4e2dgit\u4f7f\u7528\u60c5\u51b5\u662f\u975e\u5e38\u591a\u7684,\u5728\u6b64\u5904\u8bb0\u5f55\u4e00\u4e0bgit\u7684\u547d\u4ee4,\u65b9\u4fbf\u4eca\u540e\u67e5\u627e"),Object(r.b)("h3",{id:"\u65b0\u5efa"},"\u65b0\u5efa"),Object(r.b)("p",null,"\u521b\u5efa\u4e00\u4e2a\u65b0\u7684 git \u7248\u672c\u5e93\u3002\u8fd9\u4e2a\u7248\u672c\u5e93\u7684\u914d\u7f6e\u3001\u5b58\u50a8\u7b49\u4fe1\u606f\u4f1a\u88ab\u4fdd\u5b58\u5230.git \u6587\u4ef6\u5939\u4e2d"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-JavaScript"}),"\n# \u521d\u59cb\u5316\u5f53\u524d\u9879\u76ee\n$ git init\n\n# \u65b0\u5efa\u4e00\u4e2a\u76ee\u5f55\uff0c\u5c06\u5176\u521d\u59cb\u5316\u4e3aGit\u4ee3\u7801\u5e93\n$ git init [project-name]\n\n# \u5728\u6307\u5b9a\u76ee\u5f55\u521b\u5efa\u4e00\u4e2a\u7a7a\u7684 Git \u4ed3\u5e93\u3002\u8fd0\u884c\u8fd9\u4e2a\u547d\u4ee4\u4f1a\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a directory\uff0c\u53ea\u5305\u542b .git \u5b50\u76ee\u5f55\u7684\u7a7a\u76ee\u5f55\u3002\n\n$ git init --bare <directory>\n\n# \u4e0b\u8f7d\u4e00\u4e2a\u9879\u76ee\u548c\u5b83\u7684\u6574\u4e2a\u4ee3\u7801\u5386\u53f2\n# \u8fd9\u4e2a\u547d\u4ee4\u5c31\u662f\u5c06\u4e00\u4e2a\u7248\u672c\u5e93\u62f7\u8d1d\u5230\u53e6\u4e00\u4e2a\u76ee\u5f55\u4e2d\uff0c\u540c\u65f6\u4e5f\u5c06\u5206\u652f\u90fd\u62f7\u8d1d\u5230\u65b0\u7684\u7248\u672c\u5e93\u4e2d\u3002\u8fd9\u6837\u5c31\u53ef\u4ee5\u5728\u65b0\u7684\u7248\u672c\u5e93\u4e2d\u63d0\u4ea4\u5230\u8fdc\u7a0b\u5206\u652f\n$ git clone [url]\n\n")),Object(r.b)("h3",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-JavaScript"}),'# \u663e\u793a\u5f53\u524d\u7684Git\u914d\u7f6e\n$ git config --list\n\n# \u7f16\u8f91Git\u914d\u7f6e\u6587\u4ef6\n$ git config -e [--global]\n\n# \u8f93\u51fa\u3001\u8bbe\u7f6e\u57fa\u672c\u7684\u5168\u5c40\u53d8\u91cf\n$ git config --global user.email\n$ git config --global user.name\n\n$ git config --global user.email "MyEmail@gmail.com"\n$ git config --global user.name "My Name"\n\n# \u5b9a\u4e49\u5f53\u524d\u7528\u6237\u6240\u6709\u63d0\u4ea4\u4f7f\u7528\u7684\u4f5c\u8005\u90ae\u7bb1\u3002\n$ git config --global alias.<alias-name> <git-command>\n\n# \u4e3aGit\u547d\u4ee4\u521b\u5efa\u4e00\u4e2a\u5feb\u6377\u65b9\u5f0f\uff08\u522b\u540d\uff09\u3002\n$ git config --system core.editor <editor>\n')),Object(r.b)("h3",{id:"\u5e2e\u52a9"},"\u5e2e\u52a9"),Object(r.b)("p",null,"git \u5185\u7f6e\u4e86\u5bf9\u547d\u4ee4\u975e\u5e38\u8be6\u7ec6\u7684\u89e3\u91ca\uff0c\u53ef\u4ee5\u4f9b\u6211\u4eec\u5feb\u901f\u67e5\u9605"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-JavaScript"}),"# \u67e5\u627e\u53ef\u7528\u547d\u4ee4\n$ git help\n\n# \u67e5\u627e\u6240\u6709\u53ef\u7528\u547d\u4ee4\n$ git help -a\n\n# \u5728\u6587\u6863\u5f53\u4e2d\u67e5\u627e\u7279\u5b9a\u7684\u547d\u4ee4\n# git help <\u547d\u4ee4>\n$ git help add\n$ git help commit\n$ git help init\n\n")),Object(r.b)("h3",{id:"\u72b6\u6001"},"\u72b6\u6001"),Object(r.b)("p",null,"\u663e\u793a\u7d22\u5f15\u6587\u4ef6\uff08\u4e5f\u5c31\u662f\u5f53\u524d\u5de5\u4f5c\u7a7a\u95f4\uff09\u548c\u5f53\u524d\u7684\u5934\u6307\u9488\u6307\u5411\u7684\u63d0\u4ea4\u7684\u4e0d\u540c"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-JavaScript"}),"\n# \u663e\u793a\u5206\u652f\uff0c\u672a\u8ddf\u8e2a\u6587\u4ef6\uff0c\u66f4\u6539\u548c\u5176\u4ed6\u4e0d\u540c\n$ git status\n\n# \u67e5\u770b\u5176\u4ed6\u7684git status\u7684\u7528\u6cd5\n$ git help status\n\n")),Object(r.b)("h3",{id:"\u4fe1\u606f"},"\u4fe1\u606f"),Object(r.b)("p",null,"\u83b7\u53d6\u67d0\u4e9b\u6587\u4ef6\uff0c\u67d0\u4e9b\u5206\u652f\uff0c\u67d0\u6b21\u63d0\u4ea4\u7b49 git \u4fe1\u606f"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-JavaScript"}),'\n# \u663e\u793acommit\u5386\u53f2\uff0c\u4ee5\u53ca\u6bcf\u6b21commit\u53d1\u751f\u53d8\u66f4\u7684\u6587\u4ef6\n$ git log --stat\n\n# \u641c\u7d22\u63d0\u4ea4\u5386\u53f2\uff0c\u6839\u636e\u5173\u952e\u8bcd\n$ git log -S [keyword]\n\n# \u663e\u793a\u67d0\u4e2acommit\u4e4b\u540e\u7684\u6240\u6709\u53d8\u52a8\uff0c\u6bcf\u4e2acommit\u5360\u636e\u4e00\u884c\n$ git log [tag] HEAD --pretty=format:%s\n\n# \u663e\u793a\u67d0\u4e2acommit\u4e4b\u540e\u7684\u6240\u6709\u53d8\u52a8\uff0c\u5176"\u63d0\u4ea4\u8bf4\u660e"\u5fc5\u987b\u7b26\u5408\u641c\u7d22\u6761\u4ef6\n$ git log [tag] HEAD --grep feature\n\n# \u663e\u793a\u67d0\u4e2a\u6587\u4ef6\u7684\u7248\u672c\u5386\u53f2\uff0c\u5305\u62ec\u6587\u4ef6\u6539\u540d\n$ git log --follow [file]\n$ git whatchanged [file]\n\n# \u663e\u793a\u6307\u5b9a\u6587\u4ef6\u76f8\u5173\u7684\u6bcf\u4e00\u6b21diff\n$ git log -p [file]\n\n# \u663e\u793a\u8fc7\u53bb5\u6b21\u63d0\u4ea4\n$ git log -5 --pretty --oneline\n\n# \u663e\u793a\u6240\u6709\u63d0\u4ea4\u8fc7\u7684\u7528\u6237\uff0c\u6309\u63d0\u4ea4\u6b21\u6570\u6392\u5e8f\n$ git shortlog -sn\n\n# \u663e\u793a\u6307\u5b9a\u6587\u4ef6\u662f\u4ec0\u4e48\u4eba\u5728\u4ec0\u4e48\u65f6\u95f4\u4fee\u6539\u8fc7\n$ git blame [file]\n\n# \u663e\u793a\u6682\u5b58\u533a\u548c\u5de5\u4f5c\u533a\u7684\u5dee\u5f02\n$ git diff\n\n# \u663e\u793a\u6682\u5b58\u533a\u548c\u4e0a\u4e00\u4e2acommit\u7684\u5dee\u5f02\n$ git diff --cached [file]\n\n# \u663e\u793a\u5de5\u4f5c\u533a\u4e0e\u5f53\u524d\u5206\u652f\u6700\u65b0commit\u4e4b\u95f4\u7684\u5dee\u5f02\n$ git diff HEAD\n\n# \u663e\u793a\u4e24\u6b21\u63d0\u4ea4\u4e4b\u95f4\u7684\u5dee\u5f02\n$ git diff [first-branch]...[second-branch]\n\n# \u663e\u793a\u4eca\u5929\u4f60\u5199\u4e86\u591a\u5c11\u884c\u4ee3\u7801\n$ git diff --shortstat "@{0 day ago}"\n\n# \u6bd4\u8f83\u6682\u5b58\u533a\u548c\u7248\u672c\u5e93\u5dee\u5f02\n$ git diff --staged\n\n# \u6bd4\u8f83\u6682\u5b58\u533a\u548c\u7248\u672c\u5e93\u5dee\u5f02\n$ git diff --cached\n\n# \u4ec5\u4ec5\u6bd4\u8f83\u7edf\u8ba1\u4fe1\u606f\n$ git diff --stat\n\n# \u663e\u793a\u67d0\u6b21\u63d0\u4ea4\u7684\u5143\u6570\u636e\u548c\u5185\u5bb9\u53d8\u5316\n$ git show [commit]\n\n# \u663e\u793a\u67d0\u6b21\u63d0\u4ea4\u53d1\u751f\u53d8\u5316\u7684\u6587\u4ef6\n$ git show --name-only [commit]\n\n# \u663e\u793a\u67d0\u6b21\u63d0\u4ea4\u65f6\uff0c\u67d0\u4e2a\u6587\u4ef6\u7684\u5185\u5bb9\n$ git show [commit]:[filename]\n\n# \u663e\u793a\u5f53\u524d\u5206\u652f\u7684\u6700\u8fd1\u51e0\u6b21\u63d0\u4ea4\n$ git reflog\n\n# \u67e5\u770b\u8fdc\u7a0b\u5206\u652f\n$ git br -r\n\n# \u521b\u5efa\u65b0\u7684\u5206\u652f\n$ git br <new_branch>\n\n# \u67e5\u770b\u5404\u4e2a\u5206\u652f\u6700\u540e\u63d0\u4ea4\u4fe1\u606f\n$ git br -v\n\n# \u67e5\u770b\u5df2\u7ecf\u88ab\u5408\u5e76\u5230\u5f53\u524d\u5206\u652f\u7684\u5206\u652f\n$ git br --merged\n\n# \u67e5\u770b\u5c1a\u672a\u88ab\u5408\u5e76\u5230\u5f53\u524d\u5206\u652f\u7684\u5206\u652f\n$ git br --no-merged\n\n')),Object(r.b)("h3",{id:"\u6dfb\u52a0"},"\u6dfb\u52a0"),Object(r.b)("p",null,"\u6dfb\u52a0\u6587\u4ef6\u5230\u5f53\u524d\u5de5\u4f5c\u7a7a\u95f4\u4e2d\u3002\u5982\u679c\u4f60\u4e0d\u4f7f\u7528 git add \u5c06\u6587\u4ef6\u6dfb\u52a0\u8fdb\u53bb\uff0c\u90a3\u4e48\u8fd9\u4e9b\u6587\u4ef6\u4e5f\u4e0d\u4f1a\u6dfb\u52a0\u5230\u4e4b\u540e\u7684\u63d0\u4ea4\u4e4b\u4e2d"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-JavaScript"}),"\n# \u6dfb\u52a0\u4e00\u4e2a\u6587\u4ef6\n$ git add test.js\n\n# \u6dfb\u52a0\u4e00\u4e2a\u5b50\u76ee\u5f55\u4e2d\u7684\u6587\u4ef6\n$ git add /path/to/file/test.js\n\n# \u652f\u6301\u6b63\u5219\u8868\u8fbe\u5f0f\n$ git add ./*.js\n\n# \u6dfb\u52a0\u6307\u5b9a\u6587\u4ef6\u5230\u6682\u5b58\u533a\n$ git add [file1] [file2] ...\n\n# \u6dfb\u52a0\u6307\u5b9a\u76ee\u5f55\u5230\u6682\u5b58\u533a\uff0c\u5305\u62ec\u5b50\u76ee\u5f55\n$ git add [dir]\n\n# \u6dfb\u52a0\u5f53\u524d\u76ee\u5f55\u7684\u6240\u6709\u6587\u4ef6\u5230\u6682\u5b58\u533a\n$ git add .\n\n# \u6dfb\u52a0\u6bcf\u4e2a\u53d8\u5316\u524d\uff0c\u90fd\u4f1a\u8981\u6c42\u786e\u8ba4\n# \u5bf9\u4e8e\u540c\u4e00\u4e2a\u6587\u4ef6\u7684\u591a\u5904\u53d8\u5316\uff0c\u53ef\u4ee5\u5b9e\u73b0\u5206\u6b21\u63d0\u4ea4\n$ git add -p\n\n")),Object(r.b)("h3",{id:"\u5220\u9664"},"\u5220\u9664"),Object(r.b)("p",null,"rm \u548c\u4e0a\u9762\u7684 add \u547d\u4ee4\u76f8\u53cd\uff0c\u4ece\u5de5\u4f5c\u7a7a\u95f4\u4e2d\u53bb\u6389\u67d0\u4e2a\u6587\u4ef6"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-JavaScript"}),"\n# \u79fb\u9664 HelloWorld.js\n$ git rm HelloWorld.js\n\n# \u79fb\u9664\u5b50\u76ee\u5f55\u4e2d\u7684\u6587\u4ef6\n$ git rm /pather/to/the/file/HelloWorld.js\n\n# \u5220\u9664\u5de5\u4f5c\u533a\u6587\u4ef6\uff0c\u5e76\u4e14\u5c06\u8fd9\u6b21\u5220\u9664\u653e\u5165\u6682\u5b58\u533a\n$ git rm [file1] [file2] ...\n\n# \u505c\u6b62\u8ffd\u8e2a\u6307\u5b9a\u6587\u4ef6\uff0c\u4f46\u8be5\u6587\u4ef6\u4f1a\u4fdd\u7559\u5728\u5de5\u4f5c\u533a\n$ git rm --cached [file]\n")),Object(r.b)("h3",{id:"\u5206\u652f"},"\u5206\u652f"),Object(r.b)("p",null,"\u7ba1\u7406\u5206\u652f\uff0c\u53ef\u4ee5\u901a\u8fc7\u4e0b\u5217\u547d\u4ee4\u5bf9\u5206\u652f\u8fdb\u884c\u589e\u5220\u6539\u67e5\u5207\u6362\u7b49"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-JavaScript"}),"# \u67e5\u770b\u6240\u6709\u7684\u5206\u652f\u548c\u8fdc\u7a0b\u5206\u652f\n$ git branch -a\n\n# \u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u5206\u652f\n$ git branch [branch-name]\n\n# \u91cd\u547d\u540d\u5206\u652f\n# git branch -m <\u65e7\u540d\u79f0> <\u65b0\u540d\u79f0>\n$ git branch -m [branch-name] [new-branch-name]\n\n# \u7f16\u8f91\u5206\u652f\u7684\u4ecb\u7ecd\n$ git branch [branch-name] --edit-description\n\n# \u5217\u51fa\u6240\u6709\u672c\u5730\u5206\u652f\n$ git branch\n\n# \u5217\u51fa\u6240\u6709\u8fdc\u7a0b\u5206\u652f\n$ git branch -r\n\n# \u65b0\u5efa\u4e00\u4e2a\u5206\u652f\uff0c\u4f46\u4f9d\u7136\u505c\u7559\u5728\u5f53\u524d\u5206\u652f\n$ git branch [branch-name]\n\n# \u65b0\u5efa\u4e00\u4e2a\u5206\u652f\uff0c\u5e76\u5207\u6362\u5230\u8be5\u5206\u652f\n$ git checkout -b [branch]\n\n# \u65b0\u5efa\u4e00\u4e2a\u5206\u652f\uff0c\u6307\u5411\u6307\u5b9acommit\n$ git branch [branch] [commit]\n\n# \u65b0\u5efa\u4e00\u4e2a\u5206\u652f\uff0c\u4e0e\u6307\u5b9a\u7684\u8fdc\u7a0b\u5206\u652f\u5efa\u7acb\u8ffd\u8e2a\u5173\u7cfb\n$ git branch --track [branch] [remote-branch]\n\n# \u5207\u6362\u5230\u6307\u5b9a\u5206\u652f\uff0c\u5e76\u66f4\u65b0\u5de5\u4f5c\u533a\n$ git checkout [branch-name]\n\n# \u5207\u6362\u5230\u4e0a\u4e00\u4e2a\u5206\u652f\n$ git checkout -\n\n# \u5efa\u7acb\u8ffd\u8e2a\u5173\u7cfb\uff0c\u5728\u73b0\u6709\u5206\u652f\u4e0e\u6307\u5b9a\u7684\u8fdc\u7a0b\u5206\u652f\u4e4b\u95f4\n$ git branch --set-upstream [branch] [remote-branch]\n\n# \u5408\u5e76\u6307\u5b9a\u5206\u652f\u5230\u5f53\u524d\u5206\u652f\n$ git merge [branch]\n\n# \u9009\u62e9\u4e00\u4e2acommit\uff0c\u5408\u5e76\u8fdb\u5f53\u524d\u5206\u652f\n$ git cherry-pick [commit]\n\n# \u5220\u9664\u5206\u652f\n$ git branch -d [branch-name]\n\n# \u5220\u9664\u8fdc\u7a0b\u5206\u652f\n$ git push origin --delete [branch-name]\n$ git branch -dr [remote/branch]\n\n# \u5207\u6362\u5230\u67d0\u4e2a\u5206\u652f\n$ git co <branch>\n\n# \u521b\u5efa\u65b0\u7684\u5206\u652f\uff0c\u5e76\u4e14\u5207\u6362\u8fc7\u53bb\n$ git co -b <new_branch>\n\n# \u57fa\u4e8ebranch\u521b\u5efa\u65b0\u7684new_branch\n$ git co -b <new_branch> <branch>\n\n# \u628a\u67d0\u6b21\u5386\u53f2\u63d0\u4ea4\u8bb0\u5f55checkout\u51fa\u6765\uff0c\u4f46\u65e0\u5206\u652f\u4fe1\u606f\uff0c\u5207\u6362\u5230\u5176\u4ed6\u5206\u652f\u4f1a\u81ea\u52a8\u5220\u9664\n$ git co $id\n\n# \u628a\u67d0\u6b21\u5386\u53f2\u63d0\u4ea4\u8bb0\u5f55checkout\u51fa\u6765\uff0c\u521b\u5efa\u6210\u4e00\u4e2a\u5206\u652f\n$ git co $id -b <new_branch>\n\n# \u5220\u9664\u67d0\u4e2a\u5206\u652f\n$ git br -d <branch>\n\n# \u5f3a\u5236\u5220\u9664\u67d0\u4e2a\u5206\u652f (\u672a\u88ab\u5408\u5e76\u7684\u5206\u652f\u88ab\u5220\u9664\u7684\u65f6\u5019\u9700\u8981\u5f3a\u5236)\n$ git br -D <branch>\n")),Object(r.b)("h3",{id:"\u68c0\u51fa"},"\u68c0\u51fa"),Object(r.b)("p",null,"\u5c06\u5f53\u524d\u5de5\u4f5c\u7a7a\u95f4\u66f4\u65b0\u5230\u7d22\u5f15\u6240\u6807\u8bc6\u7684\u6216\u8005\u67d0\u4e00\u7279\u5b9a\u7684\u5de5\u4f5c\u7a7a\u95f4"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-JavaScript"}),'\n# \u68c0\u51fa\u4e00\u4e2a\u7248\u672c\u5e93\uff0c\u9ed8\u8ba4\u5c06\u66f4\u65b0\u5230master\u5206\u652f\n$ git checkout\n# \u68c0\u51fa\u5230\u4e00\u4e2a\u7279\u5b9a\u7684\u5206\u652f\n$ git checkout branchName\n# \u65b0\u5efa\u4e00\u4e2a\u5206\u652f\uff0c\u5e76\u4e14\u5207\u6362\u8fc7\u53bb\uff0c\u76f8\u5f53\u4e8e"git branch <\u540d\u5b57>; git checkout <\u540d\u5b57>"\n$ git checkout -b newBranch\n\u8fdc\u7a0b\u540c\u6b65\n\u8fdc\u7a0b\u540c\u6b65\u7684\u8fdc\u7aef\u5206\u652f\n\n# \u4e0b\u8f7d\u8fdc\u7a0b\u4ed3\u5e93\u7684\u6240\u6709\u53d8\u52a8\n$ git fetch [remote]\n\n# \u663e\u793a\u6240\u6709\u8fdc\u7a0b\u4ed3\u5e93\n$ git remote -v\n\n# \u663e\u793a\u67d0\u4e2a\u8fdc\u7a0b\u4ed3\u5e93\u7684\u4fe1\u606f\n$ git remote show [remote]\n\n# \u589e\u52a0\u4e00\u4e2a\u65b0\u7684\u8fdc\u7a0b\u4ed3\u5e93\uff0c\u5e76\u547d\u540d\n$ git remote add [shortname] [url]\n\n# \u67e5\u770b\u8fdc\u7a0b\u670d\u52a1\u5668\u5730\u5740\u548c\u4ed3\u5e93\u540d\u79f0\n$ git remote -v\n\n# \u6dfb\u52a0\u8fdc\u7a0b\u4ed3\u5e93\u5730\u5740\n$ git remote add origin git@ github:xxx/xxx.git\n\n# \u8bbe\u7f6e\u8fdc\u7a0b\u4ed3\u5e93\u5730\u5740(\u7528\u4e8e\u4fee\u6539\u8fdc\u7a0b\u4ed3\u5e93\u5730\u5740)\n$ git remote set-url origin git@ github.com:xxx/xxx.git\n\n# \u5220\u9664\u8fdc\u7a0b\u4ed3\u5e93\n$ git remote rm <repository>\n\n# \u4e0a\u4f20\u672c\u5730\u6307\u5b9a\u5206\u652f\u5230\u8fdc\u7a0b\u4ed3\u5e93\n# \u628a\u672c\u5730\u7684\u5206\u652f\u66f4\u65b0\u5230\u8fdc\u7aeforigin\u7684master\u5206\u652f\u4e0a\n# git push <\u8fdc\u7aef> <\u5206\u652f>\n# git push \u76f8\u5f53\u4e8e git push origin master\n$ git push [remote] [branch]\n\n# \u5f3a\u884c\u63a8\u9001\u5f53\u524d\u5206\u652f\u5230\u8fdc\u7a0b\u4ed3\u5e93\uff0c\u5373\u4f7f\u6709\u51b2\u7a81\n$ git push [remote] --force\n\n# \u63a8\u9001\u6240\u6709\u5206\u652f\u5230\u8fdc\u7a0b\u4ed3\u5e93\n$ git push [remote] --all\n')),Object(r.b)("h3",{id:"\u64a4\u9500"},"\u64a4\u9500"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-JavaScript"}),"\n# \u6062\u590d\u6682\u5b58\u533a\u7684\u6307\u5b9a\u6587\u4ef6\u5230\u5de5\u4f5c\u533a\n$ git checkout [file]\n\n# \u6062\u590d\u67d0\u4e2acommit\u7684\u6307\u5b9a\u6587\u4ef6\u5230\u6682\u5b58\u533a\u548c\u5de5\u4f5c\u533a\n$ git checkout [commit] [file]\n\n# \u6062\u590d\u6682\u5b58\u533a\u7684\u6240\u6709\u6587\u4ef6\u5230\u5de5\u4f5c\u533a\n$ git checkout .\n\n# \u91cd\u7f6e\u6682\u5b58\u533a\u7684\u6307\u5b9a\u6587\u4ef6\uff0c\u4e0e\u4e0a\u4e00\u6b21commit\u4fdd\u6301\u4e00\u81f4\uff0c\u4f46\u5de5\u4f5c\u533a\u4e0d\u53d8\n$ git reset [file]\n\n# \u91cd\u7f6e\u6682\u5b58\u533a\u4e0e\u5de5\u4f5c\u533a\uff0c\u4e0e\u4e0a\u4e00\u6b21commit\u4fdd\u6301\u4e00\u81f4\n$ git reset --hard\n\n# \u91cd\u7f6e\u5f53\u524d\u5206\u652f\u7684\u6307\u9488\u4e3a\u6307\u5b9acommit\uff0c\u540c\u65f6\u91cd\u7f6e\u6682\u5b58\u533a\uff0c\u4f46\u5de5\u4f5c\u533a\u4e0d\u53d8\n$ git reset [commit]\n\n# \u91cd\u7f6e\u5f53\u524d\u5206\u652f\u7684HEAD\u4e3a\u6307\u5b9acommit\uff0c\u540c\u65f6\u91cd\u7f6e\u6682\u5b58\u533a\u548c\u5de5\u4f5c\u533a\uff0c\u4e0e\u6307\u5b9acommit\u4e00\u81f4\n$ git reset --hard [commit]\n\n# \u91cd\u7f6e\u5f53\u524dHEAD\u4e3a\u6307\u5b9acommit\uff0c\u4f46\u4fdd\u6301\u6682\u5b58\u533a\u548c\u5de5\u4f5c\u533a\u4e0d\u53d8\n$ git reset --keep [commit]\n\n# \u65b0\u5efa\u4e00\u4e2acommit\uff0c\u7528\u6765\u64a4\u9500\u6307\u5b9acommit\n# \u540e\u8005\u7684\u6240\u6709\u53d8\u5316\u90fd\u5c06\u88ab\u524d\u8005\u62b5\u6d88\uff0c\u5e76\u4e14\u5e94\u7528\u5230\u5f53\u524d\u5206\u652f\n$ git revert [commit]\n\n# \u6062\u590d\u6700\u540e\u4e00\u6b21\u63d0\u4ea4\u7684\u72b6\u6001\n$ git revert HEAD\n\n# \u6682\u65f6\u5c06\u672a\u63d0\u4ea4\u7684\u53d8\u5316\u79fb\u9664\uff0c\u7a0d\u540e\u518d\u79fb\u5165\n$ git stash\n$ git stash pop\n\n# \u5217\u6240\u6709stash\n$ git stash list\n\n# \u6062\u590d\u6682\u5b58\u7684\u5185\u5bb9\n$ git stash apply\n\n# \u5220\u9664\u6682\u5b58\u533a\n$ git stash drop\n")),Object(r.b)("h3",{id:"commit"},"commit"),Object(r.b)("p",null,"\u5c06\u5f53\u524d\u7d22\u5f15\u7684\u66f4\u6539\u4fdd\u5b58\u4e3a\u4e00\u4e2a\u65b0\u7684\u63d0\u4ea4\uff0c\u8fd9\u4e2a\u63d0\u4ea4\u5305\u62ec\u7528\u6237\u505a\u51fa\u7684\u66f4\u6539\u4e0e\u4fe1\u606f"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-JavaScript"}),"\n# \u63d0\u4ea4\u6682\u5b58\u533a\u5230\u4ed3\u5e93\u533a\u9644\u5e26\u63d0\u4ea4\u4fe1\u606f\n$ git commit -m [message]\n\n# \u63d0\u4ea4\u6682\u5b58\u533a\u7684\u6307\u5b9a\u6587\u4ef6\u5230\u4ed3\u5e93\u533a\n$ git commit [file1] [file2] ... -m [message]\n\n# \u63d0\u4ea4\u5de5\u4f5c\u533a\u81ea\u4e0a\u6b21commit\u4e4b\u540e\u7684\u53d8\u5316\uff0c\u76f4\u63a5\u5230\u4ed3\u5e93\u533a\n$ git commit -a\n\n# \u63d0\u4ea4\u65f6\u663e\u793a\u6240\u6709diff\u4fe1\u606f\n$ git commit -v\n\n# \u4f7f\u7528\u4e00\u6b21\u65b0\u7684commit\uff0c\u66ff\u4ee3\u4e0a\u4e00\u6b21\u63d0\u4ea4\n# \u5982\u679c\u4ee3\u7801\u6ca1\u6709\u4efb\u4f55\u65b0\u53d8\u5316\uff0c\u5219\u7528\u6765\u6539\u5199\u4e0a\u4e00\u6b21commit\u7684\u63d0\u4ea4\u4fe1\u606f\n$ git commit --amend -m [message]\n\n# \u91cd\u505a\u4e0a\u4e00\u6b21commit\uff0c\u5e76\u5305\u62ec\u6307\u5b9a\u6587\u4ef6\u7684\u65b0\u53d8\u5316\n$ git commit --amend [file1] [file2] ...\n")),Object(r.b)("h3",{id:"diff"},"diff"),Object(r.b)("p",null,"\u663e\u793a\u5f53\u524d\u5de5\u4f5c\u7a7a\u95f4\u548c\u63d0\u4ea4\u7684\u4e0d\u540c"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-JavaScript"}),"\n# \u663e\u793a\u5de5\u4f5c\u76ee\u5f55\u548c\u7d22\u5f15\u7684\u4e0d\u540c\n$ git diff\n\n# \u663e\u793a\u7d22\u5f15\u548c\u6700\u8fd1\u4e00\u6b21\u63d0\u4ea4\u7684\u4e0d\u540c\n$ git diff --cached\n\n# \u663e\u793a\u5de5\u4f5c\u76ee\u5f55\u548c\u6700\u8fd1\u4e00\u6b21\u63d0\u4ea4\u7684\u4e0d\u540c\n$ git diff HEAD\n")),Object(r.b)("h3",{id:"grep"},"grep"),Object(r.b)("p",null,"\u53ef\u4ee5\u5728\u7248\u672c\u5e93\u4e2d\u5feb\u901f\u67e5\u627e"),Object(r.b)("p",null,"\u53ef\u9009\u914d\u7f6e\uff1a"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-JavaScript"}),'\n# \u5728\u641c\u7d22\u7ed3\u679c\u4e2d\u663e\u793a\u884c\u53f7\n$ git config --global grep.lineNumber true\n\n# \u662f\u641c\u7d22\u7ed3\u679c\u53ef\u8bfb\u6027\u66f4\u597d\n$ git config --global alias.g "grep --break --heading --line-number"\n# \u5728\u6240\u6709\u7684java\u4e2d\u67e5\u627evariableName\n$ git grep \'variableName\' -- \'*.java\'\n\n# \u641c\u7d22\u5305\u542b "arrayListName" \u548c, "add" \u6216 "remove" \u7684\u6240\u6709\u884c\n$ git grep -e \'arrayListName\' --and \\( -e add -e remove \\)\n')),Object(r.b)("h3",{id:"log"},"log"),Object(r.b)("p",null,"\u663e\u793a\u8fd9\u4e2a\u7248\u672c\u5e93\u7684\u6240\u6709\u63d0\u4ea4"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-JavaScript"}),"\n# \u663e\u793a\u6240\u6709\u63d0\u4ea4\n$ git log\n\n# \u663e\u793a\u67d0\u51e0\u6761\u63d0\u4ea4\u4fe1\u606f\n$ git log -n 10\n\n# \u4ec5\u663e\u793a\u5408\u5e76\u63d0\u4ea4\n$ git log --merges\n\n# \u67e5\u770b\u8be5\u6587\u4ef6\u6bcf\u6b21\u63d0\u4ea4\u8bb0\u5f55\n$ git log <file>\n\n# \u67e5\u770b\u6bcf\u6b21\u8be6\u7ec6\u4fee\u6539\u5185\u5bb9\u7684diff\n$ git log -p <file>\n\n# \u67e5\u770b\u6700\u8fd1\u4e24\u6b21\u8be6\u7ec6\u4fee\u6539\u5185\u5bb9\u7684diff\n$ git log -p -2\n\n#\u67e5\u770b\u63d0\u4ea4\u7edf\u8ba1\u4fe1\u606f\n$ git log --stat\n")),Object(r.b)("h3",{id:"merge"},"merge"),Object(r.b)("p",null,"\u5408\u5e76\u5c31\u662f\u5c06\u5916\u90e8\u7684\u63d0\u4ea4\u5408\u5e76\u5230\u81ea\u5df1\u7684\u5206\u652f\u4e2d"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-JavaScript"}),"\n# \u5c06\u5176\u4ed6\u5206\u652f\u5408\u5e76\u5230\u5f53\u524d\u5206\u652f\n$ git merge branchName\n\n# \u5728\u5408\u5e76\u65f6\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u5408\u5e76\u540e\u7684\u63d0\u4ea4\n# \u4e0d\u8981 Fast-Foward \u5408\u5e76\uff0c\u8fd9\u6837\u53ef\u4ee5\u751f\u6210 merge \u63d0\u4ea4\n$ git merge --no-ff branchName\n")),Object(r.b)("h3",{id:"mv"},"mv"),Object(r.b)("p",null,"\u91cd\u547d\u540d\u6216\u79fb\u52a8\u4e00\u4e2a\u6587\u4ef6"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-JavaScript"}),"# \u91cd\u547d\u540d\n$ git mv test.js test2.js\n\n# \u79fb\u52a8\n$ git mv test.js ./new/path/test.js\n\n# \u6539\u540d\u6587\u4ef6\uff0c\u5e76\u4e14\u5c06\u8fd9\u4e2a\u6539\u540d\u653e\u5165\u6682\u5b58\u533a\n$ git mv [file-original] [file-renamed]\n\n# \u5f3a\u5236\u91cd\u547d\u540d\u6216\u79fb\u52a8\n# \u8fd9\u4e2a\u6587\u4ef6\u5df2\u7ecf\u5b58\u5728\uff0c\u5c06\u8981\u8986\u76d6\u6389\n$ git mv -f myFile existingFile\n")),Object(r.b)("h3",{id:"tag"},"tag"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-JavaScript"}),"# \u5217\u51fa\u6240\u6709tag\n$ git tag\n\n# \u65b0\u5efa\u4e00\u4e2atag\u5728\u5f53\u524dcommit\n$ git tag [tag]\n\n# \u65b0\u5efa\u4e00\u4e2atag\u5728\u6307\u5b9acommit\n$ git tag [tag] [commit]\n\n# \u5220\u9664\u672c\u5730tag\n$ git tag -d [tag]\n\n# \u5220\u9664\u8fdc\u7a0btag\n$ git push origin :refs/tags/[tagName]\n\n# \u67e5\u770btag\u4fe1\u606f\n$ git show [tag]\n\n# \u63d0\u4ea4\u6307\u5b9atag\n$ git push [remote] [tag]\n\n# \u63d0\u4ea4\u6240\u6709tag\n$ git push [remote] --tags\n\n# \u65b0\u5efa\u4e00\u4e2a\u5206\u652f\uff0c\u6307\u5411\u67d0\u4e2atag\n$ git checkout -b [branch] [tag]\n")),Object(r.b)("h3",{id:"pull"},"pull"),Object(r.b)("p",null,"\u4ece\u8fdc\u7aef\u7248\u672c\u5e93\u5408\u5e76\u5230\u5f53\u524d\u5206\u652f"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-JavaScript"}),"# \u4ece\u8fdc\u7aeforigin\u7684master\u5206\u652f\u66f4\u65b0\u7248\u672c\u5e93\n# git pull <\u8fdc\u7aef> <\u5206\u652f>\n$ git pull origin master\n\n# \u6293\u53d6\u8fdc\u7a0b\u4ed3\u5e93\u6240\u6709\u5206\u652f\u66f4\u65b0\u5e76\u5408\u5e76\u5230\u672c\u5730\uff0c\u4e0d\u8981\u5feb\u8fdb\u5408\u5e76\n$ git pull --no-ff\n")),Object(r.b)("h3",{id:"ci"},"ci"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-JavaScript"}),'$ git ci <file>\n$ git ci .\n# \u5c06git add, git rm\u548cgit ci\u7b49\u64cd\u4f5c\u90fd\u5408\u5e76\u5728\u4e00\u8d77\u505a\n$ git ci -a\n$ git ci -am "some comments"\n# \u4fee\u6539\u6700\u540e\u4e00\u6b21\u63d0\u4ea4\u8bb0\u5f55\n$ git ci --amend\n')),Object(r.b)("h3",{id:"rebase-\u8c28\u614e\u4f7f\u7528"},"rebase (\u8c28\u614e\u4f7f\u7528)"),Object(r.b)("p",null,"\u5c06\u4e00\u4e2a\u5206\u652f\u4e0a\u6240\u6709\u7684\u63d0\u4ea4\u5386\u53f2\u90fd\u5e94\u7528\u5230\u53e6\u4e00\u4e2a\u5206\u652f\u4e0a\n\u4e0d\u8981\u5728\u4e00\u4e2a\u5df2\u7ecf\u516c\u5f00\u7684\u8fdc\u7aef\u5206\u652f\u4e0a\u4f7f\u7528 rebase."),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-JavaScript"}),"# \u5c06experimentBranch\u5e94\u7528\u5230master\u4e0a\u9762\n# git rebase <basebranch> <topicbranch>\n$ git rebase master experimentBranch\n")),Object(r.b)("h3",{id:"reset-\u8c28\u614e\u4f7f\u7528"},"reset (\u8c28\u614e\u4f7f\u7528)"),Object(r.b)("p",null,"\u5c06\u5f53\u524d\u7684\u5934\u6307\u9488\u590d\u4f4d\u5230\u4e00\u4e2a\u7279\u5b9a\u7684\u72b6\u6001\u3002\u8fd9\u6837\u53ef\u4ee5\u4f7f\u4f60\u64a4\u9500 merge\u3001pull\u3001commits\u3001add \u7b49\n\u8fd9\u662f\u4e2a\u5f88\u5f3a\u5927\u7684\u547d\u4ee4\uff0c\u4f46\u662f\u5728\u4f7f\u7528\u65f6\u4e00\u5b9a\u8981\u6e05\u695a\u5176\u6240\u4ea7\u751f\u7684\u540e\u679c"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-JavaScript"}),"# \u4f7f staging \u533a\u57df\u6062\u590d\u5230\u4e0a\u6b21\u63d0\u4ea4\u65f6\u7684\u72b6\u6001\uff0c\u4e0d\u6539\u53d8\u73b0\u5728\u7684\u5de5\u4f5c\u76ee\u5f55\n$ git reset\n\n# \u4f7f staging \u533a\u57df\u6062\u590d\u5230\u4e0a\u6b21\u63d0\u4ea4\u65f6\u7684\u72b6\u6001\uff0c\u8986\u76d6\u73b0\u5728\u7684\u5de5\u4f5c\u76ee\u5f55\n$ git reset --hard\n\n# \u5c06\u5f53\u524d\u5206\u652f\u6062\u590d\u5230\u67d0\u6b21\u63d0\u4ea4\uff0c\u4e0d\u6539\u53d8\u73b0\u5728\u7684\u5de5\u4f5c\u76ee\u5f55\n# \u5728\u5de5\u4f5c\u76ee\u5f55\u4e2d\u6240\u6709\u7684\u6539\u53d8\u4ecd\u7136\u5b58\u5728\n$ git reset dha78as\n\n# \u5c06\u5f53\u524d\u5206\u652f\u6062\u590d\u5230\u67d0\u6b21\u63d0\u4ea4\uff0c\u8986\u76d6\u73b0\u5728\u7684\u5de5\u4f5c\u76ee\u5f55\n# \u5e76\u4e14\u5220\u9664\u6240\u6709\u672a\u63d0\u4ea4\u7684\u6539\u53d8\u548c\u6307\u5b9a\u63d0\u4ea4\u4e4b\u540e\u7684\u6240\u6709\u63d0\u4ea4\n$ git reset --hard dha78as\n")),Object(r.b)("h3",{id:"\u5176\u4ed6"},"\u5176\u4ed6"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-JavaScript"}),"  # \u751f\u6210\u4e00\u4e2a\u53ef\u4f9b\u53d1\u5e03\u7684\u538b\u7f29\u5305\n  $ git archive\n\n  # \u6253\u8865\u4e01\n  $ git apply ../sync.patch\n\n  # \u6d4b\u8bd5\u8865\u4e01\u80fd\u5426\u6210\u529f\n  $ git apply --check ../sync.patch\n\n  # \u67e5\u770bGit\u7684\u7248\u672c\n  $ git --version\n")),Object(r.b)("h3",{id:"\u53c2\u8003"},"\u53c2\u8003"),Object(r.b)("p",null,Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://www.ruanyifeng.com/blog/2015/12/git-cheat-sheet.html"}),"\u5e38\u7528 Git \u547d\u4ee4\u6e05\u5355")))}o.isMDXComponent=!0},112:function(n,e,t){"use strict";t.d(e,"b",(function(){return r})),t.d(e,"a",(function(){return c}));var i=t(22),a=t(114);function r(){var n=Object(i.default)().siteConfig,e=(n=void 0===n?{}:n).baseUrl,t=void 0===e?"/":e,r=n.url;return{withBaseUrl:function(n,e){return function(n,e,t,i){var r=void 0===i?{}:i,c=r.forcePrependBaseUrl,g=void 0!==c&&c,l=r.absolute,b=void 0!==l&&l;if(!t)return t;if(t.startsWith("#"))return t;if(Object(a.b)(t))return t;if(g)return e+t;var o=t.startsWith(e)?t:e+t.replace(/^\//,"");return b?n+o:o}(r,t,n,e)}}}function c(n,e){return void 0===e&&(e={}),(0,r().withBaseUrl)(n,e)}},113:function(n,e,t){"use strict";t.d(e,"a",(function(){return m})),t.d(e,"b",(function(){return s}));var i=t(0),a=t.n(i);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function c(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,i)}return t}function g(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?c(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e){if(null==n)return{};var t,i,a=function(n,e){if(null==n)return{};var t,i,a={},r=Object.keys(n);for(i=0;i<r.length;i++)t=r[i],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(i=0;i<r.length;i++)t=r[i],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var b=a.a.createContext({}),o=function(n){var e=a.a.useContext(b),t=e;return n&&(t="function"==typeof n?n(e):g(g({},e),n)),t},m=function(n){var e=o(n.components);return a.a.createElement(b.Provider,{value:e},n.children)},p={inlineCode:"code",wrapper:function(n){var e=n.children;return a.a.createElement(a.a.Fragment,{},e)}},u=a.a.forwardRef((function(n,e){var t=n.components,i=n.mdxType,r=n.originalType,c=n.parentName,b=l(n,["components","mdxType","originalType","parentName"]),m=o(t),u=i,s=m["".concat(c,".").concat(u)]||m[u]||p[u]||r;return t?a.a.createElement(s,g(g({ref:e},b),{},{components:t})):a.a.createElement(s,g({ref:e},b))}));function s(n,e){var t=arguments,i=e&&e.mdxType;if("string"==typeof n||i){var r=t.length,c=new Array(r);c[0]=u;var g={};for(var l in e)hasOwnProperty.call(e,l)&&(g[l]=e[l]);g.originalType=n,g.mdxType="string"==typeof n?n:i,c[1]=g;for(var b=2;b<r;b++)c[b]=t[b];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},114:function(n,e,t){"use strict";function i(n){return!0===/^(\w*:|\/\/)/.test(n)}function a(n){return void 0!==n&&!i(n)}t.d(e,"b",(function(){return i})),t.d(e,"a",(function(){return a}))}}]);