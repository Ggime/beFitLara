<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
    <link rel="stylesheet" href="/css/estilo.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="/js/jquery.min.js" charset="utf-8"></script>
  </head>
  <body>

    @include('plantillas.header')

    @yield('contenido')

    @include('plantillas.footer')

    @yield('scripts')
  </body>
</html>
