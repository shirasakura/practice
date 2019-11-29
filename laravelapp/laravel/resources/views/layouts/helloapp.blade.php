
{{-- 親レイアウト --}}

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>@yield('title')</title>
  <link rel="stylesheet" type="text/css" href="/css/app.css">
</head>
<style>
body{
  font-size: 16pt;
  color: #999;
  margin: 5px;
}
h1{
  font-size: 50pt;
  text-align: right;
  color: #f6f6f6;
  margin: -20px 0px -30px 0px;
  letter-spacing: -4pt;
}
ul{
  font-size: 12pt;
}
th{
  background-color:#999;
  color: #fff;
  padding: 5px 10px;
}
td{
  border: solid 1px #aaa;
  color: #999;
  padding: 5px 10px;
}
hr{
  margin:25px 100px;
  border-top: 1px dashed #ddd;
}
.minutitle{
  font-size: 14pt;
  font-weight: bold;
  margin: 0px;
}
.content{
  margin: 10px;
}
.footer{
  text-align: right;
  font-size: 10pt;
  margin: 10px;
  border-bottom: solid 1px #ccc;
  color: #ccc;
}
/* レイアウト .. /layouts */
</style>
<body>
  <h1>@yield('title')</h1>
  @section('menubar')
<h2 class="menutitle">※メニュー</h2>
<ul>
  <li>@show</li>
</ul>
<hr size="1">
<div class="content">
  @yield('content')
  {{-- １番土台となるレイアウトで@sectionを用意する場合は@endsectionではなく、@showというディレクティブでセクションの終わりを指定します。 --}}
</div>
<div class="footer">
  @yield('footer')
</div>
</body>
</html>