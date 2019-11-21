@extends('layouts.helloapp')

@section('title', 'Board.index')

@section('menubar')
    @parent
    ボードページ
@endsection

@section('content')
    <table>
      <tr><th></th><td>Data</td></tr>
      @foreach ($items as $item)
          <tr>
            <td>{{$item->getData()}}</td>
          </tr>
      @endforeach
    </table>
@endsection

@section('footer')
    copyright 2019
@endsection