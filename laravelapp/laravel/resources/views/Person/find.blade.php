@extends('layouts.helloapp')

@section('title', 'Person.find')

@section('menubar')
    @parent
    検索ページ
@endsection

@section('content')
<form method="post" action="/person/find">
{{ csrf_field() }}
<input type="text" name="input" value="{{$input}}">
<input type="submit" value="find">
</form>
@if (isset($item))
<table>
  <tr><th>Data</th></tr>
      <tr>
        <td>{{$item->getData()}}</td>
      </tr>
</table>
@endif
@endsection

@section('footer')
    &copy;2017 kokoa
@endsection