array_item=[];
encabezado={fecha:'', nro_mov:'', id_mov:'', id_func:'', id_func_receptor:'', receptor:''};
item={articulo:'', stock:'', id_lpt:'', lpt:'', entradas:'0', salidas:'', observaciones:''};

function MuestraDatos() {
$("#texto").val(item.entradas+'|'+encabezado.id_func_receptor+'|'+encabezado.id_func);
}

/*
function Valida_numero(campo) {
	if(isNaN(campo) || campo == null || campo.length == 0 || /^\s+$/.test(campo)) {
		return false;
	} else {
		return true;
	}
}

function Valida_texto(campo) {
	if( campo == null || campo.length == 0 || /^\s+$/.test(campo) ) {
		return false;
	} else {
		return true;
	}
}

function Valida_fecha(campo){
	var dtCh= "-";
	var minYear=2015;
	var maxYear=2050;
	function isInteger(s){
		var i;
		for (i = 0; i < s.length; i++){
			var c = s.charAt(i);
			if (((c < "0") || (c > "9"))) return false;
		}
		return true;
	}
	function stripCharsInBag(s, bag){
		var i;
		var returnString = "";
		for (i = 0; i < s.length; i++){
			var c = s.charAt(i);
			if (bag.indexOf(c) == -1) returnString += c;
		}
		return returnString;
	}
	function daysInFebruary (year){
		return (((year % 4 == 0) && ( (!(year % 100 == 0)) || (year % 400 == 0))) ? 29 : 28 );
	}
	function DaysArray(n) {
		for (var i = 1; i <= n; i++) {
			this[i] = 31
			if (i==4 || i==6 || i==9 || i==11) {this[i] = 30}
			if (i==2) {this[i] = 29}
		}
		return this
	}
	function isDate(dtStr){
		var daysInMonth = DaysArray(12)
		var pos1=dtStr.indexOf(dtCh)
		var pos2=dtStr.indexOf(dtCh,pos1+1)
		var strYear=dtStr.substring(0,pos1)
		var strMonth=dtStr.substring(pos1+1,pos2)
		var strDay=dtStr.substring(pos2+1)
		strYr=strYear
		if (strDay.charAt(0)=="0" && strDay.length>1) strDay=strDay.substring(1)
		if (strMonth.charAt(0)=="0" && strMonth.length>1) strMonth=strMonth.substring(1)
		for (var i = 1; i <= 3; i++) {
			if (strYr.charAt(0)=="0" && strYr.length>1) strYr=strYr.substring(1)
		}
		month=parseInt(strMonth)
		day=parseInt(strDay)
		year=parseInt(strYr)
		if (pos1==-1 || pos2==-1){
			return false
		}
		if (strMonth.length<1 || month<1 || month>12){
			return false
		}
		if (strDay.length<1 || day<1 || day>31 || (month==2 && day>daysInFebruary(year)) || day > daysInMonth[month]){
			return false
		}
		if (strYear.length != 4 || year==0 || year<minYear || year>maxYear){
			return false
		}
		if (dtStr.indexOf(dtCh,pos2+1)!=-1 || isInteger(stripCharsInBag(dtStr, dtCh))==false){
			return false
		}
		return true
	}
	if(isDate(campo)){
		return true;
	}else{
		return false;
	}
}

function ValidarItem() {
	var array_error = [];
	var error = '';
	var resultado = [];
	var c_texto	= [item.articulo, item.lpt];
	var c_nro 	= [item.stock, item.id_lpt, item.entradas, item.salidas];
	for (var i = 0; i < c_texto.length; i++) {
		resultado.push(Valida_texto(c_texto[i]));
	}
	for (var i = 0; i < c_nro.length; i++) {
		resultado.push(Valida_numero(c_nro[i]));
	}
	for (var i = 0; i < resultado.length; i++) {
		if (resultado[i] == false) {
			array_error.push(i);
	} 
	}
	if (resultado[0] == false) {
		document.getElementById('ayuda_articulo').innerHTML='Debe seleccionar un artículo de la lista.';
	} else {
		document.getElementById('ayuda_articulo').innerHTML='';
	}
	if (resultado[1] == false || resultado[3] == false) {
		document.getElementById('ayuda_lpt').innerHTML='Debe seleccionar un Lote de P.T. de la lista.';
 	} else {
		document.getElementById('ayuda_lpt').innerHTML='';
	}
	if (resultado[4] == false) {
		document.getElementById('ayuda_unidades').innerHTML='Debe seleccionar el Nº de unidades a ingresar.';
	} else {
		document.getElementById('ayuda_unidades').innerHTML='';
	}
	if (resultado[5] == false) {
		document.getElementById('ayuda_unidades').innerHTML='Debe seleccionar el Nº de unidades a egresar.';
	} else {
		document.getElementById('ayuda_unidades').innerHTML='';
	}

	if (array_error.length == 0 && (CompruebaStock)()) {
		if (parseInt(item.salidas) >= 1) {
			AgregaItem();
		} else {
			document.getElementById('ayuda_unidades').innerHTML='El Nº de unidades debe ser mayor que cero.';		
		}
	}
}


function ValidaDespacho(){
	var array_error = [];
	var error = '';
	var resultado = [];
	var c_texto	= [encabezado.receptor];
	var c_nro 	= [encabezado.nro_mov, encabezado.id_mov, encabezado.id_func, encabezado.id_func_receptor];
	var c_fecha	= [encabezado.fecha];
	for (var i = 0; i < c_texto.length; i++) {
		resultado.push(Valida_texto(c_texto[i]));
	}
	for (var i = 0; i < c_nro.length; i++) {
		resultado.push(Valida_numero(c_nro[i]));
	}
	for (var i = 0; i < c_fecha.length; i++) {
		resultado.push(Valida_fecha(c_fecha[i]));
	}
	for (var i = 0; i < resultado.length; i++) {
		if (resultado[i] == false) {
			array_error.push(i);
	} 
	}
	if (resultado[0] == false) {
		document.getElementById('ayuda_destino').innerHTML='Debe especificar el Área de Destino';
	} else {
		document.getElementById('ayuda_destino').innerHTML='';
	}
	if (resultado[1] == false || resultado[3] == false) {
		document.getElementById('ayuda_nro_mov').innerHTML='Debe especificar el Número de Movimiento';
	} else {
		document.getElementById('ayuda_nro_mov').innerHTML='';
	}
	if (resultado[2] == false) {
		document.getElementById('ayuda_tipo_mov').innerHTML='Debe especificar el Tipo de Movimiento';
	} else {
		document.getElementById('ayuda_tipo_mov').innerHTML='';
	}
	if (resultado[3] == false) {
		document.getElementById('ayuda_emisor').innerHTML='Debe especificar el Funcionario Emisor';
	} else {
		document.getElementById('ayuda_emisor').innerHTML='';
	}
	if (resultado[4] == false) {
		document.getElementById('ayuda_receptor').innerHTML='Debe especificar el Funcionario Receptor';
	} else {
		document.getElementById('ayuda_receptor').innerHTML='';
	}
	if (resultado[5] == false) {
		document.getElementById('ayuda_fecha').innerHTML='Debe proporcionar una Fecha válida';
	} else {
		document.getElementById('ayuda_fecha').innerHTML='';
	}

	if (array_error.length == 0) {
		EmiteDespacho();
		document.getElementById('notifica').innerHTML='<b><br>~·~ Se ingresaron los datos ~·~</b>';
		muestraNotifica();
	} else {
		error+='<b><br>~·~ No se ingresaron los datos ~·~</b>';
		document.getElementById('notifica').innerHTML=error;
		muestraNotifica();
	}
}


function AgregaItem() {
	array_item.push(item);
	MuestraItems();
	document.getElementById('lpt').innerHTML='';
	CargaPedido('LPT');
	CargaPedido('ART');
	document.getElementById('unidades').value='';
	item={articulo:'', stock:'',id_lpt:'', lpt:'', entradas:'0', salidas:'', observaciones:item.observaciones};//Pongo el array en cero.
}

function BorraItem(index) {
array_item.splice(index,1);
MuestraItems();
}

function HabilitaInput(index) {
var identificador='salidas_'+index;
document.getElementById(identificador).disabled=false;
document.getElementById(identificador).style.backgroundColor='yellow';
}

function CompruebaStock() {
	if (item.stock != null) {
		document.getElementById('unidades').disabled=false;
		if (document.getElementById('unidades').value != null && document.getElementById('unidades').value != '' ) {
			var salidas=parseInt(document.getElementById('unidades').value);
		} else {
			var salidas=0;
		}
		var stock=parseInt(item.stock);
		if (salidas<=stock) {
			document.getElementById('ayuda_unidades').innerHTML='';
			return true;
		} else {
			document.getElementById('ayuda_unidades').innerHTML='La cantidad a egresar no puede ser mayor al stock disponible.'
			return false;
		}
	} else {
			document.getElementById('unidades').value='';		
			document.getElementById('unidades').disabled=true;		
	}
}
function CompruebaStock2(index) {
	var identificador='salidas_'+index;
	var identificador2='unidades_'+index;
	var salidas=parseInt(document.getElementById(identificador).value);
	var stock=parseInt(document.getElementById(identificador2).getAttribute('data-stock'));
		if (salidas<=stock) {
			document.getElementById(identificador).disabled=true;
			document.getElementById(identificador).style.backgroundColor='white';
			array_item[index].salidas=salidas;
			return true;
		} else {
			document.getElementById(identificador).style.backgroundColor='red';
			alert('La cantidad a egresar no puede ser mayor al stock disponible.\nDebe ser menor o igual a:'+stock+' unidades.');
			return false;
		}
}

function Observaciones(index) {
	var identificador= 'observacion_'+index;
	var observaciones= document.getElementById(identificador).value;
	if ((Valida_texto)(observaciones)) {
		array_item[index].observaciones=observaciones;
	} else {
		alert('Observaciones no es un texto válido');
	}
}

function DefineEstilo() {
	var estilo = '';
	for (i in obj_estilo) {
		estilo+=obj_estilo[i]
	}
return estilo;
}

function MuestraItems(){
obj_estilo = {
padding:'padding-left:5px;padding-right:5px;',
font_family:'font-family: Arial,Helvetica Neue,Helvetica,sans-serif;',
margin:'margin: 0 0 0 0;',
height:'height:30px;',
border_left:'border-left: 1px solid black;',
border_top:'border-top: 1px solid black;',
border_right:'border-right: 1px solid black;',
border_bottom:'border-bottom: 1px solid black;',
font_weight:'font-weight: bold;',
font_size:'font-size:10pt;',
color:'color:white;',
text_align:'text-align:center;',
vertical_align:'vertical-align: middle;',
background_color:'background-color:#545454;'
}


var tabla='\
<table style="vertical-align:middle; border-collapse: collapse; white-space:nowrap;">\
<thead>\
	<tr>\
		<th style="'+(DefineEstilo)()+'">ACCIÓN</th>\
		<th style="'+(DefineEstilo)()+'">ARTÍCULO</th>\
		<th style="'+(DefineEstilo)()+'">LPT</th>\
		<th style="'+(DefineEstilo)()+'">UNIDADES</th>\
		<th style="'+(DefineEstilo)()+'min-width:450px;">Observaciones</th>\
	</tr>\
</thead>\
<tbody>';

obj_estilo = {
padding:'padding-left:5px;padding-right:5px;',
font_family:'font-family: Arial,Helvetica Neue,Helvetica,sans-serif;',
margin:'margin: 0 0 0 0;',
border_left:'border-left: 1px solid black;',
border_top:'border-top: 1px solid black;',
border_right:'border-right: 1px solid black;',
border_bottom:'border-bottom: 1px solid black;',
height:'height:18px;',
font_weight:'font-weight: normal;',
font_size:'font-size:9pt;',
color:'color:black;',
text_align:'text-align:center;',
vertical_align:'vertical-align: middle;',
background_color:'background-color:#E6E6E6;'
}
if (array_item.length==0) {
	document.getElementById('div_tabla_items').innerHTML='';
} else {


for (var i=0;i<array_item.length;i++) {
			if (obj_estilo.background_color=='background-color:white;') {
				obj_estilo.background_color='background-color:#E6E6E6;';
			} else {
				obj_estilo.background_color='background-color:white;';
			}
tabla+='\
	<tr>\
		<td style="'+(DefineEstilo)()+'" ><img src="../images/borrar.png" style="height:18px;" onclick="BorraItem('+i+')"></td>\
		<td style="'+(DefineEstilo)()+'" >'+array_item[i]['articulo']+'</td>\
		<td style="'+(DefineEstilo)()+'" data-id_lpt="'+array_item[i]['id_lpt']+'">'+array_item[i]['lpt']+'</td>\
		<td id="unidades_'+i+'" style="'+(DefineEstilo)()+'" data-stock="'+array_item[i]['stock']+'"><div style="margin:0;padding:0;float:left;"><input onchange="CompruebaStock2('+i+')" id="salidas_'+i+'" value="'+array_item[i]['salidas']+'" type="text" style="width:40px; height:18px;" disabled></div><div style="margin:0;padding:0;float:left;"><img onclick="HabilitaInput('+i+')" src="../images/editar.png" style="height:18px;"></div></td>\
		<td style="'+(DefineEstilo)()+'"><input id="observacion_'+i+'" onchange="Observaciones('+i+')" placeholder="Introduzca su comentario aquí" value="'+array_item[i]['observaciones']+'" type="text" style="width:450px; height:18px;"></td>\
</tr>';
}
tabla+='</tbody></table>';
tabla+='<input type="button" value="Despacha Artículos" onclick="ValidaDespacho()">'
document.getElementById('div_tabla_items').innerHTML=tabla;
}
}

function ActualizaFecha() {
	var date = document.getElementById('fecha').value;
	var f_separado =date.split('/');
	var d = new Date(f_separado[2],f_separado[1]-1,f_separado[0]);
	var fecha = d.getFullYear()+'-'+String('00'+(d.getMonth()+1)).slice(-2)+'-'+String('00'+d.getDate()).slice(-2); 
	encabezado.fecha=fecha; //FECHA DE EXPEDICIÓN DEL PRODUCTO TERMINADO
}

function Actualiza_Nro_Mov() {
	encabezado.nro_mov = document.getElementById('nro_mov').value;
}

function ActualizaSalida() {
	item.salidas = document.getElementById('unidades').value;
}

function Actualiza_Destino() {
	encabezado.receptor = document.getElementById('destino').value;
}

function Actualiza_Tipo_Movimiento(elemento) {
	encabezado.id_mov = elemento.options[elemento.selectedIndex].value;
}
*/
function Actualiza_Emisor() {
	encabezado.id_func= $("#emisor option:selected").attr('id');
}

function Actualiza_Receptor() {
	encabezado.id_func_receptor = $('#receptor option:selected').attr('id');
	CompletaDestino();
}


function CompletaDestino() {
	if (parseInt(encabezado.id_func_receptor) >= 13 && parseInt(encabezado.id_func_receptor) <= 15 || parseInt(encabezado.id_func_receptor) == 19) {
		document.getElementById('destino').value='Departamento Comercial';
		encabezado.receptor='Departamento Comercial';
		item.observaciones='';
	}
	if (parseInt(encabezado.id_func_receptor) >= 16 && parseInt(encabezado.id_func_receptor) <= 17) {
		document.getElementById('destino').value='Turismo';
		encabezado.receptor='Turismo';
		item.observaciones='';
	}
	if (parseInt(encabezado.id_func_receptor) == 1 || parseInt(encabezado.id_func_receptor) == 18) {
		document.getElementById('destino').value='';
		document.getElementById('destino').placeholder='Escriba el destino aquí';
		encabezado.receptor='';
		item.observaciones='';
	}
	if (parseInt(encabezado.id_func_receptor) == 0 ) {
		document.getElementById('destino').value='OTRO';
		document.getElementById('destino').placeholder='Escriba el destino aquí';
		encabezado.receptor='Otro';
		item.observaciones='';
	}
	if (parseInt(encabezado.id_func_receptor) == 5 || parseInt(encabezado.id_func_receptor) == 6) {
		document.getElementById('destino').value='Laboratorio';
		document.getElementById('destino').placeholder='Escriba el destino aquí';
		encabezado.receptor='Laboratorio';
		item.observaciones='Muestras Laboratorio';
	}
}
/*
function Actualiza_LPT(elemento) {
	item.id_lpt = elemento.options[elemento.selectedIndex].value;
	item.lpt = elemento.options[elemento.selectedIndex].getAttribute('data-lpt');
	item.stock = elemento.options[elemento.selectedIndex].getAttribute('data-stock');
	CompruebaStock();

}

function EmiteDespacho() {
	var array_consulta=[];
	var array_item2 = array_item;
	for (var i = 0; i< array_item2.length; i++) {
		delete array_item2[i].articulo;
		delete array_item2[i].stock;
		delete array_item2[i].lpt;
		array_consulta.push(JSON.parse((JSON.stringify(encabezado) + JSON.stringify(array_item2[i])).replace(/}{/g,",")));
	}
	socket.emit('IngresaSalida', array_consulta);
	array_item=[];
	encabezado={fecha:'', nro_mov:'', id_mov:'', id_func:'', id_func_receptor:'', receptor:''};
	MuestraItems();
	document.getElementById('nro_mov').value='';
	document.getElementById('destino').value='';
	CargaPedido('DMOV','');
	CargaPedido('FUNC');
	Hoy();
}

function Hoy() {
var d = new Date();
document.getElementById('fecha').value= String('00'+d.getDate()).slice(-2)+'/'+String('00'+(d.getMonth()+1)).slice(-2)+'/'+d.getFullYear();
encabezado.fecha = d.getFullYear()+'-'+String('00'+(d.getMonth()+1)).slice(-2)+'-'+String('00'+d.getDate()).slice(-2);
}
*/
function CargaPedido(columna, consulta) {	
	var data = {id:socket.io.engine.id, consulta:consulta};
	socket.emit('Carga'+columna+'_Pedido', data);
}

function ConectaSocket() {
	//inicializo socket como variable global. Para ello omito "var" en la declaración
	socket = io.connect('http://pastock.ddns.net:3000');
	//Le pido al servidor que consulte a la BD y me mande los datos
	socket.on('Conexión Establecida' , function() {
		CargaPedido('DMOV','');
		CargaPedido('FUNC');
	});
	//Cuando el servidor envía los datos (emite 'CargaDatos') lleno mi tabla

	socket.on('CargaDMOV_Resultado', function(data){
		var tabla='<option value="" data-placeholder="true">Elige el Tipo de Movimiento</option>';
		for (var i = 0; i < data.length; i++) {
			if (data[i]['Entrada']!=1) {
				tabla+='<option id="'+data[i]['Id']+'" value="'+data[i]['Id']+'">'+data[i]['Col1']+'</option>';	
			}		
		}

		document.getElementById('tipo_mov').innerHTML=tabla;
		$("#tipo_mov").selectmenu();
		$("#tipo_mov").selectmenu('refresh', true);
	});

	socket.on('CargaFUNC_Resultado', function(data){
		var tabla='<option value="" data-placeholder="true">Elija el nombre de quien entrega el pedido</option>';
		var tabla2='<option value="" data-placeholder="true">Elija el nombre de quien recibe el producto</option>';
		var fin_tbl1='';
		var fin_tbl2='';
		for (var i = 0; i < data.length; i++) {
			if (data[i]['Emisor']==1) {
				tabla+='<option id="'+data[i]['Id']+'" value="'+data[i]['Id']+'">'+data[i]['Nombre']+'</option>';
			}
			if (data[i]['Receptor']==1) {
				if (data[i]['Id'] == 5 || data[i]['Id'] == 6) {
					fin_tbl1+='<option id="'+data[i]['Id']+'" value="'+data[i]['Id']+'">'+data[i]['Nombre']+'</option>';
				} else if (data[i]['Id'] == 1) {
					fin_tbl2+='<option id="'+data[i]['Id']+'" value="'+data[i]['Id']+'">'+data[i]['Nombre']+'</option>';
				} else {
					tabla2+='<option id="'+data[i]['Id']+'" value="'+data[i]['Id']+'">'+data[i]['Nombre']+'</option>';
				} 
			}
		}
		tabla2+=fin_tbl1+fin_tbl2;
		tabla2+='<option id="0" value="0">Otro</option>';

		document.getElementById('emisor').innerHTML=tabla;
		$("#emisor").selectmenu();
		$("#emisor").selectmenu('refresh', true);

		document.getElementById('receptor').innerHTML=tabla2;
		$("#receptor").selectmenu();
		$("#receptor").selectmenu('refresh', true);
	});

}
