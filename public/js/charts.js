window.onload = function () {
    google.charts.load('current', {
        'packages': ['bar']
    });
    google.charts.setOnLoadCallback(drawStuff);
    
    function drawStuff() {
        var data = new google.visualization.arrayToDataTable([
            ['Mes', 'IMC'],
            ["Marzo", 21.3],
            ["Abril", 22.7],
            ["Mayo", 24],
            ['Junio', 23],
            ['Julio', 23.5],
            ['Agosto', 24.6],
            ['Septiembre', 23],
            ['Octubre', 23.5]
        ]);
    
        var ancho = 600;
        if (innerWidth < 720 && innerWidth > 500) {
            ancho = 400;
        } else if (innerWidth < 500) {
            ancho = 300;
        }

        var options = {
            width: ancho,
            legend: {
                position: 'none'
            },
            chart: {
                title: 'Tu Historial de IMC',
                subtitle: 'Mira tú evolución mes a mes.'
            },
            axes: {
                x: {
                    0: {
                        side: 'top',
                        label: 'I M C'
                    } // Top x-axis.
                }
            },
            bar: {
                groupWidth: "80%"
            }
        };
    
        var chart = new google.charts.Bar(document.getElementById('top_x_div'));
        // Convert the Classic options to Material options.
        chart.draw(data, google.charts.Bar.convertOptions(options));
    };
}