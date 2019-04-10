<!DOCTYPE html>
<html>
<head>
    <title></title>
    <script type="text/javascript">

        window.onload = function() {
            if (localStorage.getItem("nombre") != null) {
                document.getElementById("presupuesto").innerHTML = "<h1>PRESUPUESTO DE "+localStorage.getItem("nombre");+"</h1>";
            }
            else{
                 document.getElementById("presupuesto").innerHTML = "<h1>PRESUPUESTO</h1>";
            }
        };

    </script>
    <style type="text/css">

        table, th, td{
            text-align: center;
            border: solid 1px ;
        }
    </style>
</head>
<body>
        <div id="presupuesto"></div>

            <?php
                if(isset($_COOKIE['cesta'])){
                    $cesta = json_decode($_COOKIE['cesta']);
                    echo "<table>";
                    echo "<tr><th>nombre</th><th>cantidad</th></tr>";
                    foreach ($cesta as $value) {
                        echo "<tr>";
                        echo "<td>".$value->nombre."</td>";
                        echo "<td>".$value->cantidad."</td>";
                        echo "</tr>";
                    }
                }
                else{
                    echo "<h2>No has introducido articulos</h2>";
                }
            ?>

</body>
</html>