{"filter":false,"title":"register.php","tooltip":"/register.php","undoManager":{"mark":3,"position":3,"stack":[[{"start":{"row":58,"column":0},"end":{"row":69,"column":2},"action":"remove","lines":["\techo(\"<table><tr><th>Name</th><th>TJ Username</th><th>Password</th><th>FCPS ID</th><th>Email</th><th>Radio</th></tr>\");","\t$array = pg_fetch_row($ret);","\twhile($array != FALSE){","\t\techo(\"<tr>\");","\t\tfor($x = 0; $x < 6; $x++){","\t\t\techo(\"<th>\" . $array[$x] . \"</th>\");","\t\t}","\t\t","\t\t","\t\techo(\"</tr>\");","\t\t$array = pg_fetch_row($ret);","\t}"],"id":1219}],[{"start":{"row":57,"column":1},"end":{"row":58,"column":0},"action":"remove","lines":["",""],"id":1220}],[{"start":{"row":51,"column":0},"end":{"row":56,"column":25},"action":"remove","lines":["\t","\t$query = <<<HELP","\t\tSELECT * FROM Data;","HELP;","","\t$ret = pg_query($query);"],"id":1221,"ignore":true}],[{"start":{"row":50,"column":18},"end":{"row":51,"column":0},"action":"remove","lines":["",""],"id":1222,"ignore":true}],[{"start":{"row":37,"column":5},"end":{"row":37,"column":6},"action":"remove","lines":["*"],"id":1226}],[{"start":{"row":37,"column":6},"end":{"row":37,"column":7},"action":"remove","lines":["/"],"id":1226}],[{"start":{"row":35,"column":0},"end":{"row":35,"column":1},"action":"remove","lines":["/"],"id":1227}],[{"start":{"row":35,"column":1},"end":{"row":35,"column":2},"action":"remove","lines":["*"],"id":1228}]]},"ace":{"folds":[],"scrolltop":544.2000217437744,"scrollleft":0,"selection":{"start":{"row":35,"column":1},"end":{"row":35,"column":2},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":51,"state":"php-start","mode":"ace/mode/php"}},"timestamp":1484764008182,"hash":"fe73e4b5f58ff1df042e675f1d42fcc585d6d125"}