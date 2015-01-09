<html>
    <head>
        <link href="style/libs/font-awesome-4.2.0/css/font-awesome.min.css" type="text/css" rel="stylesheet">
        <link href="style/libs/bootstrap-3.1.1/dist/css/bootstrap.min.css" type="text/css" rel="stylesheet">
        <link href="style/css/styles.css" type="text/css" rel="stylesheet">
    </head>
    <body>
        <input type="hidden" id="controller" value="<?= $this->router->fetch_class(); ?>"/>
        <input type="hidden" id="method" value="<?= $this->router->fetch_method(); ?>"/>
