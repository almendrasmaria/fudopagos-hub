import { Article } from "@/types";

export const initialArticles: Article[] = [
  {
    "id": "31a9e8b3-cdff-46af-b31d-49d29749d778",
    "number": "01",
    "category": "SII - Facturación",
    "readTime": "3 min",
    "title": "Modelo de emisión en SII y sus efectos",
    "description": "Cómo consultar y alinear el modelo de emisión activo en el portal del SII con la configuración de Fudo.",
    "link": "www.sii.cl/servicios_online/3532-.html",
    "updatedStatus": "Actualizado",
    "code": "KB-SII-03",
    "subtitle": "Resolución y pautas operativas para SII - Facturación.",
    "verificationSteps": [
      {
        "id": "step-1",
        "text": "Confirmar con el cliente qué modelo de emisión tiene activo en el portal del SII.",
        "completed": false
      },
      {
        "id": "step-2",
        "text": "Validar en Fudo que la opción de emisión de boleta coincida con el modelo elegido en el SII para evitar duplicidad.",
        "completed": false
      }
    ],
    "problemHtml": "",
    "reasonHtml": "",
    "solutionHtml": "<p>El cliente debe consultar y configurar en el portal del SII <a target=\"_blank\" rel=\"noopener noreferrer nofollow\" href=\"https://www.sii.cl/servicios_online/3532-.html\">https://www.sii.cl/servicios_online/3532-.html</a> (Servicios Online &gt; Boleta de ventas y servicios electrónica &gt; Declaración modelo de emisión) una de las siguientes modalidades:</p><ol><li><strong>1. Siempre emito Boleta:</strong> El voucher de la terminal NO es válido como boleta. El comercio deberá emitir la boleta por su cuenta (o de forma manual). Requiere integración con Fudo para emitir boletas de efectivo y otros medios de pago desde la terminal de forma gratuita.</li><li><strong>2. No emito Boleta (Recomendado):</strong> El comprobante de la terminal de Fudo Pagos opera de forma automática como boleta válida ante el SII. En otros medios de pago requiere emisión manual o integración con Fudo para emitir desde la terminal de forma gratuita.</li></ol><p><strong>Configuración dentro de Fudo:</strong> En Administración / Configuración &gt; Fudo Pagos existe una opción idéntica. Esto NO tiene efecto real sobre el SII, pero debe mantenerse coincidente para que el sistema habilite o restrinja el botón \"Emitir boleta\" manual según la elección.</p>",
    "notesHtml": "",
    "clientResponse": {
      "text": "Para que tus comprobantes se emitan correctamente según tu configuración tributaria, te sugerimos revisar tu modelo activo en el SII:\n\n1️⃣ Ingresá a sii.cl > Servicios Online > Boleta de ventas y servicios electrónica > Declaración modelo de emisión.\n2️⃣ Verificá cuál opción tenés activa:\n   • Siempre emito Boleta: el voucher de la terminal NO vale como boleta y debés emitirla manualmente.\n   • No emito Boleta cuando recibo pago electrónico: el voucher de Fudo Pagos funciona automáticamente como boleta válida.\n3️⃣ Acompañá esa misma opción desde la configuración de tu cuenta en Fudo.\n\n✅ Si necesitás ayuda para validarlo, contanos qué modelo tenés seleccionado en el SII y lo revisamos juntos.",
      "isHomologated": true
    },
    "externalLink": {
      "title": "Portal SII Chile",
      "url": "https://www.sii.cl/servicios_online/3532-.html",
      "code": "03"
    }
  },
  {
    "id": "e8b3c4fb-755a-4838-b8fe-4f1620f93007",
    "number": "02",
    "category": "Gestión Común",
    "readTime": "2 min",
    "title": "¿Cómo exporto mis cobros - depósitos?",
    "description": "Cómo visualizar y descargar el detalle masivo de cobros y depósitos desde Fudo.",
    "link": "fudo.la/soporte",
    "updatedStatus": "Actualizado",
    "code": "KB-GES-01",
    "subtitle": "Cliente desea saber cómo visualizar los cobros o depósitos de forma detallada/masiva.",
    "verificationSteps": [
      {
        "id": "step-1",
        "text": "Confirmar si el cliente necesita el detalle de transacciones (Cobros) o de liquidaciones acreditadas (Depósitos).",
        "completed": false
      }
    ],
    "problemHtml": "<p>Cliente desea saber cómo visualizar los cobros o depósitos de forma detallada/masiva.</p>",
    "reasonHtml": "",
    "solutionHtml": "<ul><li><p>Sección <strong>“Fudo Pagos” &gt; 'Cobros'</strong> (muestra transacciones con el medio de pago Fudo Pagos).</p><img src=\"https://fudo-solution-shelf.lovable.app/api/public/img/15a01324-eedb-4f7f-9e15-419bf25280d9.png\"></li><li><p>Sección <strong>“Fudo Pagos” &gt; 'Depósitos'</strong> (muestra el detalle de los cobros depositados).</p></li></ul><p></p><p>Seleccionar periodo deseado y presionar la flecha superior junto al total para descargar el documento detallado (ventas aprobadas, número de mesa, tipo de tarjeta y comisión con IVA incluido). La descarga tanto de este Export como el de Depósitos, se realiza dentro de la cuenta de Fudo y se puede ver en \"Ver notificaciones\" el icono de mensajería arriba a la derecha.</p><img src=\"https://fudo-solution-shelf.lovable.app/api/public/img/ad17bb65-05bc-423d-84bc-b94804d35b4c.png\"><img src=\"https://fudo-solution-shelf.lovable.app/api/public/img/de4dc12c-ef48-46e5-9286-f90e32b7a192.png\"><p></p>",
    "notesHtml": "<p>Actualmente, los clientes pueden también imprimir un resumen de cobros (cierre de lote) de 'x' periodo directo desde la terminal.</p>",
    "clientResponse": {
      "text": "Podés descargar el detalle completo de tus cobros o depósitos directamente desde tu cuenta de Fudo:\n\n1️⃣ Ingresá a la sección Fudo Pagos > Cobros (transacciones) o Depósitos (liquidaciones acreditadas).\n2️⃣ Seleccioná el período que necesitás consultar.\n3️⃣ Presioná la flecha superior junto al total para generar el archivo detallado.\n4️⃣ Descargalo desde el ícono de notificaciones (arriba a la derecha) > Ver notificaciones.\n\n💡 Como tip adicional, también podés imprimir un resumen de cobros (cierre de lote) directo desde la terminal.",
      "isHomologated": true
    },
    "externalLink": {
      "title": "Base de Conocimiento Fudo",
      "url": "https://soporte.fudo.la",
      "code": "FUDO-KB"
    }
  },
  {
    "id": "5d0bd09f-aa90-466b-972f-18d62ee23aa8",
    "number": "03",
    "category": "Gestión Común",
    "readTime": "2 min",
    "title": "No se ven los cobros",
    "description": "Solución cuando un usuario no visualiza la sección de Cobros en la web o en la terminal.",
    "link": "fudo.la/soporte",
    "updatedStatus": "Actualizado",
    "code": "KB-GES-02",
    "subtitle": "Cliente no puede ver la sección de 'Cobros', tanto en la terminal como en la web.",
    "verificationSteps": [
      {
        "id": "step-1",
        "text": "Confirmar qué usuario/rol no visualiza la sección de Cobros.",
        "completed": false
      },
      {
        "id": "step-2",
        "text": "Indicar al cliente que un Administrador (Super Usuario) debe habilitar el permiso en Roles de Usuario.",
        "completed": false
      }
    ],
    "problemHtml": "<p>Cliente no puede ver la sección de 'Cobros', tanto en la terminal como en la web.</p>",
    "reasonHtml": "<p>Falta de permisos para visualizar esta sección en el rol del usuario.</p>",
    "solutionHtml": "<p>Ir a Configuración <strong>&gt; </strong>Roles de Usuario <strong>&gt; </strong>Seleccionar Rol <strong>&gt; </strong>Editar <strong>&gt; FudoPagos</strong> &gt; Activar casilla <strong>\"Listar Cobros\"</strong>.</p><img src=\"https://fudo-solution-shelf.lovable.app/api/public/img/cb8daf86-434a-467e-a204-2e3c5fbe9ccd.png\"><p></p>",
    "notesHtml": "<p>Solo un Administrador con rol de Super Usuario puede otorgar acceso a la sección Fudo Pagos &gt; 'Cobros' (icono de dinero ‘$’).</p>",
    "clientResponse": {
      "text": "Esto suele ocurrir por un permiso pendiente en el rol del usuario. Para habilitarlo (debe hacerlo un Administrador / Super Usuario):\n\n1️⃣ Ingresá a Configuración > Roles de Usuario.\n2️⃣ Seleccioná el rol correspondiente y tocá Editar.\n3️⃣ Buscá la sección FudoPagos y activá la casilla \"Listar Cobros\".\n\n✅ Una vez guardado, el usuario podrá ver la sección sin inconvenientes.",
      "isHomologated": true
    },
    "externalLink": {
      "title": "Base de Conocimiento Fudo",
      "url": "https://soporte.fudo.la",
      "code": "FUDO-KB"
    }
  },
  {
    "id": "e34bc552-75d0-41f0-b7cf-996d327c830f",
    "number": "04",
    "category": "Gestión Comercial",
    "readTime": "2 min",
    "title": "Quiero devolver una terminal que no funciona",
    "description": "Derivación al equipo de Customer Success correspondiente según el país cuando el cliente solicita devolver una terminal.",
    "link": "fudo.la/soporte",
    "updatedStatus": "Actualizado",
    "code": "KB-GES-04",
    "subtitle": "Resolución y pautas operativas para Gestión Comercial.",
    "verificationSteps": [
      {
        "id": "step-1",
        "text": "Confirmar país de la cuenta y el motivo/falla de la terminal.",
        "completed": false
      },
      {
        "id": "step-2",
        "text": "Derivar/crear folio a: Macarena Morales (Chile), Karen Gonzalez / German Rios (Argentina) o Clara Romero (México).",
        "completed": false
      }
    ],
    "problemHtml": "",
    "reasonHtml": "",
    "solutionHtml": "<p>Derivar/crear folio a:<br><br>Macarena Morales (<strong><em>Chile</em></strong>) | Fudo Pagos Chile - CS <br>Karen Gonzalez/German Rios (<strong><em>Argentina</em></strong>) | Fudo Pagos Argentina - CS <br>Clara Romero (<strong><em>México</em></strong>) | Fudo Pagos México - CS</p>",
    "notesHtml": "",
    "clientResponse": {
      "text": "Lamentamos los inconvenientes con la terminal. Para ayudarte con la devolución o recambio, vamos a derivar tu caso con nuestro equipo local:\n\n📌 Por favor confirmános:\n1️⃣ Motivo o falla que presenta el equipo.\n2️⃣ Dirección de contacto y teléfono por si necesitamos coordinar el retiro.\n\n✅ Con esos datos lo canalizamos de inmediato para darte una solución.",
      "isHomologated": true
    },
    "externalLink": {
      "title": "Base de Conocimiento Fudo",
      "url": "https://soporte.fudo.la",
      "code": "FUDO-KB"
    }
  },
  {
    "id": "b9ec36c4-5c04-41ee-bca6-25466d8aeb13",
    "number": "05",
    "category": "Reclamo de transacciones",
    "readTime": "2 min",
    "title": "Cliente solicita una devolución administrativa de una venta",
    "description": "Relevamiento de datos y derivación al área de Fudo Pagos cuando el cliente pide una devolución administrativa.",
    "link": "fudo.la/soporte",
    "updatedStatus": "Actualizado",
    "code": "KB-REC-05",
    "subtitle": "Resolución y pautas operativas para Reclamo de transacciones.",
    "verificationSteps": [
      {
        "id": "step-1",
        "text": "Consultar al cliente el motivo de la devolución.",
        "completed": false
      },
      {
        "id": "step-2",
        "text": "Identificar la venta exacta (fecha, monto, últimos 4 dígitos) y confirmar si la devolución es total o parcial.",
        "completed": false
      },
      {
        "id": "step-3",
        "text": "Verificar la transacción en Backoffice/Klap (ver sección Cobros y Liquidación) y derivar al área de Fudo Pagos.",
        "completed": false
      }
    ],
    "problemHtml": "",
    "reasonHtml": "",
    "solutionHtml": "<p>Primero, deberemos consultar al cliente el motivo de esta devolución, luego, verificar qué venta es la que debe hacerse devolución y si es total o parcial.<br><br>Derivar al área de Fudo Pagos con esta información.</p>",
    "notesHtml": "",
    "clientResponse": {
      "text": "Con gusto te ayudamos a gestionar la devolución. Para poder revisarla y procesarla correctamente, por favor compartinos:\n\n1️⃣ El motivo de la devolución.\n2️⃣ Fecha, hora aproximada y monto exacto de la venta.\n3️⃣ Si la devolución debe ser total o parcial (y en ese caso, el monto a devolver).\n\n✅ Apenas nos confirmes estos datos lo validamos y avanzamos con la gestión.",
      "isHomologated": true
    },
    "externalLink": {
      "title": "Base de Conocimiento Fudo",
      "url": "https://soporte.fudo.la",
      "code": "FUDO-KB"
    }
  },
  {
    "id": "c90de13d-df73-4d94-bfc1-26471f1680ea",
    "number": "06",
    "category": "Gestión Común",
    "readTime": "2 min",
    "title": "¿Cómo emito un resumen de cobros / cierre de lote?",
    "description": "Cómo imprimir un resumen de cobros o cierre de lote directamente desde la terminal.",
    "link": "fudo.la/soporte",
    "updatedStatus": "Actualizado",
    "code": "KB-GES-06",
    "subtitle": "Cliente desea emitir un resumen de cobros de la jornada (o jornadas anteriores).",
    "verificationSteps": [
      {
        "id": "step-1",
        "text": "Confirmar que el cliente busca emitir el cierre de lote o resumen de la jornada desde el POS.",
        "completed": false
      }
    ],
    "problemHtml": "<p>Cliente desea emitir un resumen de cobros de la jornada (o jornadas anteriores).</p>",
    "reasonHtml": "",
    "solutionHtml": "<p>Esto podrá hacerlo directo desde la terminal, en el menú lateral en la sección <strong>'Cobros'</strong>.</p><img src=\"https://fudo-solution-shelf.lovable.app/api/public/img/1e77a344-70f3-48e8-9e08-f4ae70c8ce87.png\"><p></p>",
    "notesHtml": "",
    "clientResponse": {
      "text": "Podés emitir el resumen de cobros (cierre de lote) directamente desde tu terminal:\n\n1️⃣ Abrí el menú lateral de la terminal.\n2️⃣ Ingresá en la sección Fudo Pagos > Cobros.\n3️⃣ Seleccioná la jornada o el período deseado para imprimir el resumen.\n\n🖨️ Si necesitás el detalle completo en Excel, también podés exportarlo desde Fudo Web.",
      "isHomologated": true
    },
    "externalLink": {
      "title": "Base de Conocimiento Fudo",
      "url": "https://soporte.fudo.la",
      "code": "FUDO-KB"
    }
  },
  {
    "id": "d94e8e05-b128-4058-b193-fcf701b50d06",
    "number": "07",
    "category": "Gestión Común",
    "readTime": "2 min",
    "title": "¿Dónde veo mis cobros?",
    "description": "Guía visual para ubicar la sección de Cobros tanto en Fudo Web como en la terminal.",
    "link": "fudo.la/soporte",
    "updatedStatus": "Actualizado",
    "code": "KB-GES-07",
    "subtitle": "Cliente desea saber dónde visualiza los cobros.",
    "verificationSteps": [
      {
        "id": "step-1",
        "text": "Identificar si el cliente consulta desde Fudo Web o desde la terminal POS y compartir la guía.",
        "completed": false
      }
    ],
    "problemHtml": "Cliente desea saber dónde visualiza los cobros.",
    "reasonHtml": "",
    "solutionHtml": "<p>Guiar al cliente con las imágenes:<br><br><strong>Sección en la web </strong></p><img src=\"https://fudo-solution-shelf.lovable.app/api/public/img/aa34a1a3-b08e-4ea2-82b1-0ceab2f5ec29.png\"><p><br><strong>Sección en el terminal</strong></p><img src=\"https://fudo-solution-shelf.lovable.app/api/public/img/5344ae55-a8a2-4069-813c-0ad6fa9bcee6.png\"><p></p>",
    "notesHtml": "",
    "clientResponse": {
      "text": "Podés consultar tus cobros realizados con Fudo Pagos desde cualquiera de los dos lugares:\n\n💻 En Fudo Web: ingresá al ícono de Fudo Pagos ($) en la barra superior > pestaña Cobros.\n📱 En la terminal: abrí el menú lateral > Fudo Pagos > Cobros.\n\n✅ Si no visualizás la sección, avisanos y revisamos los permisos de tu usuario.",
      "isHomologated": true
    },
    "externalLink": {
      "title": "Base de Conocimiento Fudo",
      "url": "https://soporte.fudo.la",
      "code": "FUDO-KB"
    }
  },
  {
    "id": "4d27e092-1e7a-4dd1-abd4-c507657c6850",
    "number": "08",
    "category": "Gestión Común",
    "readTime": "2 min",
    "title": "Cambio de Cuenta Bancaria",
    "description": "Uso de macro por país para que el cliente modifique su cuenta bancaria/CBU asociada a Fudo Pagos.",
    "link": "fudo.la/soporte",
    "updatedStatus": "Actualizado",
    "code": "KB-GES-08",
    "subtitle": "El cliente desea modificar la cuenta bancaria/CBU",
    "verificationSteps": [
      {
        "id": "step-1",
        "text": "Verificar que la nueva cuenta bancaria pertenezca al mismo titular fiscal (RUT en CL, CUIT en AR, RFC en MX).",
        "completed": false
      },
      {
        "id": "step-2",
        "text": "Enviar la macro correspondiente al país: #Cambio cuenta bancaria CL / AR / MX.",
        "completed": false
      }
    ],
    "problemHtml": "El cliente desea modificar la cuenta bancaria/CBU",
    "reasonHtml": "",
    "solutionHtml": "<p><strong><em>Chile</em></strong>: existe una macro llamada “<strong><em>#Cambio cuenta bancaria CL</em></strong>”, el cliente puede modificar la cuenta bancaria de forma manual, siempre y cuando coincida con su RUT. <br><br><strong><em>Argentina</em></strong>: existe una macro llamada “<strong><em>#Cambio cuenta bancaria AR</em></strong>”, el cliente puede modificar la cuenta bancaria de forma manual, siempre y cuando coincida con su CUIT <br><br><strong><em>México</em></strong>: existe una macro llamada “<strong><em>#Cambio cuenta bancaria MX</em></strong>”, el cliente puede modificar la cuenta bancaria de forma manual, siempre y cuando coincida con su RFC<br></p><img src=\"https://fudo-solution-shelf.lovable.app/api/public/img/a88468b0-2e7e-4765-8dd5-9d6c3eb109de.png\"><p></p>",
    "notesHtml": "",
    "clientResponse": {
      "text": "",
      "isHomologated": false
    },
    "externalLink": {
      "title": "Base de Conocimiento Fudo",
      "url": "https://soporte.fudo.la",
      "code": "FUDO-KB"
    }
  },
  {
    "id": "fbdb36fa-ab9e-44bf-81eb-113f722528b2",
    "number": "09",
    "category": "Gestión Comercial",
    "readTime": "2 min",
    "title": "Negociación de Tasas / Promociones",
    "description": "Derivación al equipo comercial/CS correspondiente cuando el cliente solicita renegociar tasas o promociones.",
    "link": "fudo.la/soporte",
    "updatedStatus": "Actualizado",
    "code": "KB-GES-09",
    "subtitle": "El cliente expresa querer renegociar sus tasas de comisiones o alguna otra promoción",
    "verificationSteps": [
      {
        "id": "step-1",
        "text": "Solicitar número de teléfono y correo de contacto del cliente.",
        "completed": false
      },
      {
        "id": "step-2",
        "text": "Derivar/crear folio según país a: Ronald Perdomo (CL), Karen Gonzalez (AR) o Clara Romero (MX).",
        "completed": false
      }
    ],
    "problemHtml": "El cliente expresa querer renegociar sus tasas de comisiones o alguna otra promoción",
    "reasonHtml": "",
    "solutionHtml": "<p>Según país y horario derivar/crear folio con número de teléfono y correo de contacto a:<br></p><p>Ronald Perdomo (<strong><em>Chile</em></strong>) | Fudo Pagos Chile - CS <br>Karen Gonzalez (<strong><em>Argentina</em></strong>) | Fudo Pagos Argentina - CS <br>Clara Romero (<strong><em>México</em></strong>) | Fudo Pagos México - CS <br></p><img src=\"https://fudo-solution-shelf.lovable.app/api/public/img/a8c4fd2e-2f43-4a68-b627-fd31eed33ed0.png\"><p></p>",
    "notesHtml": "",
    "clientResponse": {
      "text": "¡Gracias por consultarnos! Para revisar tus tasas vigentes o evaluar alternativas comerciales, vamos a derivar tu solicitud con nuestro equipo encargado:\n\n📞 Por favor confirmános tu número de teléfono y correo electrónico de contacto.\n\n✅ Ni bien los tengamos, generamos el aviso para que se comuniquen con vos a la brevedad.",
      "isHomologated": true
    },
    "externalLink": {
      "title": "Base de Conocimiento Fudo",
      "url": "https://soporte.fudo.la",
      "code": "FUDO-KB"
    }
  },
  {
    "id": "07df64e0-5941-4974-81e0-ca50924f1ebc",
    "number": "10",
    "category": "Reclamo de transacciones",
    "readTime": "2 min",
    "title": "¿Cómo solicitar una devolución administrativa?",
    "description": "Procedimiento interno del agente para reportar en la planilla de Excel una devolución administrativa ya corroborada.",
    "link": "docs.google.com/spreadsheets/d/1wNWA8XXVz28WGiQn4y0dx1rZAdI_kFk30CCktxrpTyk/edit?gid=868786926#gid=868786926",
    "updatedStatus": "Actualizado",
    "code": "KB-REC-10",
    "subtitle": "Resolución y pautas operativas para Reclamo de transacciones.",
    "verificationSteps": [
      {
        "id": "step-1",
        "text": "Corroborar primero si el cobro fue reciente (el cliente podría anularlo desde la terminal, ver guía #26).",
        "completed": false
      },
      {
        "id": "step-2",
        "text": "Verificar la transacción en Backoffice / Klap (ver sección Cobros y Liquidación).",
        "completed": false
      },
      {
        "id": "step-3",
        "text": "Cargar el caso directamente en la planilla de Excel de devoluciones administrativas.",
        "completed": false
      }
    ],
    "problemHtml": "",
    "reasonHtml": "",
    "solutionHtml": "<p>Reportalo directamente en este Excel una vez corroboradala información: <a target=\"_blank\" rel=\"noopener noreferrer nofollow\" href=\"https://docs.google.com/spreadsheets/d/1wNWA8XXVz28WGiQn4y0dx1rZAdI_kFk30CCktxrpTyk/edit?gid=868786926#gid=868786926\">https://docs.google.com/spreadsheets/d/1wNWA8XXVz28WGiQn4y0dx1rZAdI_kFk30CCktxrpTyk/edit?gid=868786926#gid=868786926</a></p>",
    "notesHtml": "<p>Si el cobro se realizó recientemente, el cliente puede hacer la devolución de forma manual, verificar artículo \"¿Cómo hacer la devolución de un cobro reciente?\"</p>",
    "clientResponse": {
      "text": "",
      "isHomologated": false
    },
    "externalLink": {
      "title": "docs.google.com",
      "url": "https://docs.google.com/spreadsheets/d/1wNWA8XXVz28WGiQn4y0dx1rZAdI_kFk30CCktxrpTyk/edit?gid=868786926#gid=868786926",
      "code": "10"
    }
  },
  {
    "id": "8c04792f-1289-4e73-aebb-deaefce66275",
    "number": "11",
    "category": "Reclamo de transacciones",
    "readTime": "2 min",
    "title": "Al comensal se le cobró pero en el sistema figura rechazado/no aparece",
    "description": "Qué revisar en Fudo > Cobros y en Backoffice cuando un comensal reporta cobro pero en el sistema figura rechazado o no aparece.",
    "link": "fudo.la/soporte",
    "updatedStatus": "Actualizado",
    "code": "KB-REC-11",
    "subtitle": "Resolución y pautas operativas para Reclamo de transacciones.",
    "verificationSteps": [
      {
        "id": "step-1",
        "text": "Revisar en Fudo Pagos > Cobros si la transacción figura como Aprobada.",
        "completed": false
      },
      {
        "id": "step-2",
        "text": "Si no aparece en Fudo o hay dudas, auditar en Backoffice Geopagos y en Klap/Payway (ver sección Cobros y Liquidación).",
        "completed": false
      }
    ],
    "problemHtml": "",
    "reasonHtml": "",
    "solutionHtml": "<p>Primero, deberemos verificar en la sección de Fudo Pagos<strong> &gt;</strong> Cobros si efectivamente el pago ingresó, si la transaccion se encuentra '<strong><em>Aprobadas' </em></strong>, entonces es correcta la debitación.<br></p><img src=\"https://fudo-solution-shelf.lovable.app/api/public/img/9adf58f8-d857-434c-9b02-9de4cc6b5a36.png\"><p><br></p>",
    "notesHtml": "",
    "clientResponse": {
      "text": "Entendemos la preocupación, vamos a revisar el estado real de esa operación para darte tranquilidad.\n\n📌 Para poder auditarlo en profundidad, por favor compartinos:\n1️⃣ Fecha y hora aproximada del intento de cobro.\n2️⃣ Monto exacto.\n3️⃣ Últimos 4 dígitos de la tarjeta (o foto del comprobante del comensal si lo tiene).\n\n✅ Con esos datos verificamos si el cobro impactó o si fue rechazado.",
      "isHomologated": true
    },
    "externalLink": {
      "title": "Base de Conocimiento Fudo",
      "url": "https://soporte.fudo.la",
      "code": "FUDO-KB"
    }
  },
  {
    "id": "c28b0c4c-998b-4876-bed7-fc091e60f78d",
    "number": "12",
    "category": "Gestión Común",
    "readTime": "2 min",
    "title": "¿Cuál es el tiempo de acreditación de mis ventas?",
    "description": "Cómo consultar en Dash > Fudo Pagos > Acuerdos el plazo de acreditación, días corridos y pago prioritario de la cuenta.",
    "link": "fudo.la/soporte",
    "updatedStatus": "Actualizado",
    "code": "KB-GES-12",
    "subtitle": "Cliente desea saber cuánto se demora en realizar el depósito por sus ventas efectuadas.",
    "verificationSteps": [
      {
        "id": "step-1",
        "text": "Ingresar a Dash > cuenta del cliente > Fudo Pagos > Acuerdos.",
        "completed": false
      },
      {
        "id": "step-2",
        "text": "Validar si tiene Día Corrido (Sí/No) y Pago Prioritario (Sí/No).",
        "completed": false
      },
      {
        "id": "step-3",
        "text": "Si tiene esquema estándar, recordar que ventas de fin de semana se acreditan el lunes (o primer día hábil) de 12 a 16 hs.",
        "completed": false
      }
    ],
    "problemHtml": "Cliente desea saber cuánto se demora en realizar el depósito por sus ventas efectuadas.",
    "reasonHtml": "",
    "solutionHtml": "<p>Para informar al cliente, revisamos en Dash &gt; <strong>Fudo Pagos &gt; Acuerdos</strong>:</p><ul><li><strong>Esquema habitual de acreditación:</strong><ul><li>Lun &rarr; Mar</li><li>Mar &rarr; Mié</li><li>Mié &rarr; Jue</li><li>Jue &rarr; Vie</li><li>Vie + Sáb + Dom &rarr; Lunes siguiente (o primer día hábil).</li></ul></li><li><strong>Horario habitual de pago:</strong> se realizan normalmente entre <strong>12:00 y 16:00 hs</strong>.</li><li><strong>Día Corrido: Sí + Pago Prioritario: Sí:</strong> recibe pagos también en días no hábiles (fines de semana y feriados) y antes de las 12:00 hs.</li><li><strong>Día Corrido: No + Pago Prioritario: No:</strong> recibe pagos solo en días hábiles de 12:00 a 16:00 hs.</li></ul>",
    "notesHtml": "",
    "clientResponse": {
      "text": "El tiempo de acreditación depende de los acuerdos vigentes en tu cuenta:\n\n📅 Esquema habitual:\n• Lunes a Jueves: se acredita al día hábil siguiente entre las 12:00 y 16:00 hs.\n• Viernes, Sábado y Domingo: se acredita el día lunes siguiente (o primer día hábil).\n\n⚡ Si tu cuenta tiene Pago Prioritario, los depósitos se realizan antes de las 12:00 hs; y si cuenta con Día Corrido, se procesan también en feriados y fines de semana.\n\n✅ Si querés que validemos tu horario y plazo exacto, dejanos tu ID de comercio y lo revisamos en tus acuerdos.",
      "isHomologated": true
    },
    "externalLink": {
      "title": "Base de Conocimiento Fudo",
      "url": "https://soporte.fudo.la",
      "code": "FUDO-KB"
    }
  },
  {
    "id": "9eed72e5-2240-4e51-a913-88bbe4a796b8",
    "number": "13",
    "category": "SII - Facturación",
    "readTime": "5 min",
    "title": "Las ventas de Fudo y el SII difieren en sus totales / no se reportan en el SII",
    "description": "Cómo diagnosticar diferencias entre los montos reportados por Fudo y el portal del SII (códigos 48, 39, 33 y propinas).",
    "link": "fudo.la/soporte",
    "updatedStatus": "Actualizado",
    "code": "KB-SII-13",
    "subtitle": "Los montos totales reportados por el SII no corresponden a los reportados por Fudo",
    "verificationSteps": [
      {
        "id": "step-1",
        "text": "Consultar al cliente el período exacto que está analizando y pedirle captura del total en el SII.",
        "completed": false
      },
      {
        "id": "step-2",
        "text": "Restar las propinas con Fudo Pagos al total de Fudo Pagos > Cobros de ese período (no se reportan al SII).",
        "completed": false
      },
      {
        "id": "step-3",
        "text": "Verificar si existen documentos código 48 (vouchers SII); si no hay, confirmar si tiene activo el modelo 1 en el SII.",
        "completed": false
      }
    ],
    "problemHtml": "<p>Los montos totales reportados por el SII no corresponden a los reportados por Fudo</p>",
    "reasonHtml": "<p>Mala configuración/uso del modelo de emisión del SII</p>",
    "solutionHtml": "<p>Primero, deberá analizarse el periodo que se está analizando, esto deberá consultarse al cliente, quien además deberá proveer una imagen del total de ese periodo en el SII, esto el cliente podrá verlo en la siguiente sección:</p><img src=\"https://fudo-solution-shelf.lovable.app/api/public/img/2b71fb00-0bbf-4cbb-8583-cfeff7d15af9.png\"><p>Los documentos que corresponden a vouchers (desde terminal con segundo modelo de emisión) son <strong>código 48</strong>, el <strong>código 39 </strong>es para <strong>boletas </strong>manuales, y el <strong>33 </strong>para <strong>facturas</strong>.</p><img src=\"https://fudo-solution-shelf.lovable.app/api/public/img/b91a4e03-ff93-419a-9b4b-b429984db1c7.png\"><p><br>Lo que deberemos comparar a continuación, una vez establecido el periodo y el total del SII, es ese total con el total de ese periodo en la sección Fudo Pagos <strong>&gt; </strong>'<strong>Cobros</strong>', a este monto de cobros, igualmente, deberemos restarle las propinas con Fudo Pagos de ese mismo periodo, ya que estas no se reportan al SII.</p><img src=\"https://fudo-solution-shelf.lovable.app/api/public/img/47cd94ce-fd28-41e0-94ba-f4c722034720.png\"><p><br>Si los montos no coinciden, hay un inconveniente, esto podemos detectarlo también previamente si vemos que el cliente no tiene documentos con <strong>código 48</strong>, lo que significa esto, es que el modelo de emisión del SII seleccionado es el primero, y el cliente no realizó las boletas manuales de estas ventas. Deberá informarse esto, y darle las indicaciones del funcionamiento de cada modelo, en caso de que opte cambiarlo.<br><br>Puede haber otros motivos por la discrepancia, como facturaciones duplicadas, uso de otros posnets para facturar, o error en lo enviado al SII, este es el último descarte y deberá reportarse si la causa no se encuentra en los motivos más comunes.</p>",
    "notesHtml": "<p>Desde el mes de Octubre del 2026 el SII ya no deja cambiar el modelo de emisión más de 1 vez en el mes, y si te deja cambiarlo, tomará efecto ese nuevo modelo al 1 del mes siguiente.<br><br><strong>Ejemplo</strong>:<br><br>Si hoy 27-10&nbsp;tiene Siempre Emito..., y cambia (el SII lo deja por ser primera vez en el mes) el modelo a No Emito..., las ventas por tarjeta no se enviarán con el codigo 48&nbsp; recién desde el 01-11 en adelante.<br><br>Las ventas que haga por tarjeta entre hoy 27-10 y el 31-10, debe juntarlas y subirlas manualmente (dejo instructivo) en el SII a final de mes. (Si tiene la integracion las puede hacer por ahi tambien)</p>",
    "clientResponse": {
      "text": "Para analizar la diferencia entre los montos de Fudo y el SII, necesitamos validar el período exacto:\n\n1️⃣ Indicanos el rango de fechas que estás comparando.\n2️⃣ Envianos una captura del resumen de documentos en el SII para ese período (recordá que código 48 corresponde a vouchers, 39 a boletas manuales y 33 a facturas).\n3️⃣ Tené en cuenta que las propinas cobradas con Fudo Pagos no se informan al SII, por lo que deben restarse del total de Cobros al comparar.\n\n✅ Con esa captura revisamos de inmediato el origen de la diferencia.",
      "isHomologated": true
    },
    "externalLink": {
      "title": "Base de Conocimiento Fudo",
      "url": "https://soporte.fudo.la",
      "code": "FUDO-KB"
    }
  },
  {
    "id": "180c3ed5-cc43-461b-92e1-86dc98ef5b53",
    "number": "14",
    "category": "Gestión Común",
    "readTime": "2 min",
    "title": "¿Cuál es mi comisión por venta con la terminal?",
    "description": "Cómo consultar la comisión presencial vigente del cliente en Dash > Fudo Pagos > Acuerdos (incluye IVA).",
    "link": "fudo.la/soporte",
    "updatedStatus": "Actualizado",
    "code": "KB-GES-14",
    "subtitle": "Cliente desea saber su comisión por venta.",
    "verificationSteps": [
      {
        "id": "step-1",
        "text": "Ingresar a Dash > cuenta del cliente > Fudo Pagos > Acuerdos (opción Presencial, el % incluye IVA).",
        "completed": false
      },
      {
        "id": "step-2",
        "text": "Si la cuenta es de Chile, usar menu-herramientas-cl.lovable.app/comisiones para generar el detalle con IVA desglosado.",
        "completed": false
      }
    ],
    "problemHtml": "Cliente desea saber su comisión por venta.",
    "reasonHtml": "",
    "solutionHtml": "<p>Para informar al cliente, podemos tomar la información que figura en el dash de su cuenta. En la sección Fudo Pagos &gt; Acuerdos.</p><img src=\"https://fudo-solution-shelf.lovable.app/api/public/img/d92e75c2-c25b-464c-9d46-2a498423b8e8.png\"><p>Recordar que para la terminal siempre será la opción Presencial, y que el porcentaje que figura allí INCLUYE EL IVA</p><img src=\"https://fudo-solution-shelf.lovable.app/api/public/img/d8aa12f7-84a8-4297-886e-a5ab39620807.png\"><p></p>",
    "notesHtml": "<p>Si la cuenta es de Chile, también pueden ingresar a esta herramienta y copiar el dash para obtener un texto listo para entregar con las comisiones (estas tienen el IVA desglosado)<br><br><a href=\"https://menu-herramientas-cl.lovable.app/comisiones\" target=\"_blank\" rel=\"noreferrer\">https://menu-herramientas-cl.lovable.app/comisiones</a></p>",
    "clientResponse": {
      "text": "Podés consultar tus tasas de comisión vigentes directamente desde tu cuenta o te las confirmamos por aquí.\n\n📌 Tené en cuenta que las comisiones presenciales de la terminal incluyen IVA.\n\n✅ Si querés el detalle exacto de tu comercio según medio de pago (débito/crédito), confirmános tu consulta y te enviamos la tabla actualizada.",
      "isHomologated": true
    },
    "externalLink": {
      "title": "Base de Conocimiento Fudo",
      "url": "https://soporte.fudo.la",
      "code": "FUDO-KB"
    }
  },
  {
    "id": "27008928-f28b-42c9-837d-0e17aeec68cc",
    "number": "15",
    "category": "Gestión Común",
    "readTime": "2 min",
    "title": "¿Cómo adquiero una nueva terminal?",
    "description": "Derivación al equipo de Ventas según país cuando el cliente quiere adquirir una terminal nueva o adicional.",
    "link": "fudo.la/soporte",
    "updatedStatus": "Actualizado",
    "code": "KB-GES-15",
    "subtitle": "Resolución y pautas operativas para Gestión Común.",
    "verificationSteps": [
      {
        "id": "step-1",
        "text": "Consultar volumen de ventas y cantidad de terminales deseadas.",
        "completed": false
      },
      {
        "id": "step-2",
        "text": "Derivar o crear folio en el inbox: Fudo Pagos cl,mx,argVentas.",
        "completed": false
      },
      {
        "id": "step-3",
        "text": "Asignar al agente de ventas del país: José Opazo (Chile), Ayrton Bernaola (Argentina) o Edgar Arriaga (México).",
        "completed": false
      }
    ],
    "problemHtml": "",
    "reasonHtml": "",
    "solutionHtml": "<p>El valor de la terminal dependerá del volumen de ventas del negocio y otros factores. Siempre derivar o crear folio al agente de ventas correspondiente:</p><ul><li><strong>Inbox general:</strong> Fudo Pagos cl,mx,argVentas</li><li><strong>Chile:</strong> José Opazo</li><li><strong>Argentina:</strong> Ayrton Bernaola</li><li><strong>México:</strong> Edgar Arriaga</li></ul>",
    "notesHtml": "",
    "clientResponse": {
      "text": "¡Qué buena noticia! Para ayudarte a adquirir una nueva terminal, vamos a derivar tu consulta con nuestro equipo comercial:\n\n📌 Por favor confirmános:\n1️⃣ Cantidad de terminales que necesitás.\n2️⃣ Un teléfono y correo de contacto para que puedan asesorarte.\n\n✅ Con esos datos te contactamos a la brevedad para avanzar con la solicitud.",
      "isHomologated": true
    },
    "externalLink": {
      "title": "Base de Conocimiento Fudo",
      "url": "https://soporte.fudo.la",
      "code": "FUDO-KB"
    }
  },
  {
    "id": "895f698f-46cc-4060-96e8-010f931e22ee",
    "number": "16",
    "category": "Gestión Común",
    "readTime": "2 min",
    "title": "¿Cómo solicito rollos?",
    "description": "Cómo indicar al cliente que solicite rollos de papel desde Fudo Pagos > Gestionar (AR/CL, máx. 50) o aclarar que no aplica en MX.",
    "link": "fudo.la/soporte",
    "updatedStatus": "Actualizado",
    "code": "KB-GES-16",
    "subtitle": "Resolución y pautas operativas para Gestión Común.",
    "verificationSteps": [
      {
        "id": "step-1",
        "text": "Verificar en Dash > Fudo Pagos que el cliente tenga el servicio activo y autorizado para operar (no confundir con rollos de comanderas comunes).",
        "completed": false
      },
      {
        "id": "step-2",
        "text": "Chile: Son gratuitos. Usar macro \"#Rollos | CL\" (plazo máx. 3 días hábiles). Dejar folio asignado a Anyelin Landaeta.",
        "completed": false
      },
      {
        "id": "step-3",
        "text": "Argentina: Son pagos. Usar macro \"#Rollos | AR\" (plazo máx. 6 días hábiles). Crear folio.",
        "completed": false
      },
      {
        "id": "step-4",
        "text": "México: No brindamos rollos (ignorar Macro). El cliente los adquiere por su cuenta.",
        "completed": false
      }
    ],
    "problemHtml": "",
    "reasonHtml": "",
    "solutionHtml": "<p><strong>Procedimiento operativo para solicitud de rollos de papel:</strong></p><ul><li><strong>Chile:</strong> Son gratuitos. Existe la macro <code>#Rollos | CL</code>. Plazo de entrega: máximo <strong>3 días hábiles</strong>. El folio deberá quedar asignado a <strong>Anyelin Landaeta</strong>.</li><li><strong>Argentina:</strong> Son pagos. Existe la macro <code>#Rollos | AR</code>. Plazo de entrega: máximo <strong>6 días hábiles</strong>. Crear folio correspondiente.</li><li><strong>México:</strong> No brindamos rollos en este país (ignorar macro). El cliente debe adquirirlos por su cuenta.</li><li><strong>Validación obligatoria:</strong> Verificar en Dash en la sección <strong>Fudo Pagos</strong> que tenga el servicio activo y autorizado para operar; <em>no confundir con envío de rollos para comanderas estándar</em>.</li></ul>",
    "notesHtml": "",
    "clientResponse": {
      "text": "",
      "isHomologated": false
    },
    "externalLink": {
      "title": "Base de Conocimiento Fudo",
      "url": "https://soporte.fudo.la",
      "code": "FUDO-KB"
    }
  },
  {
    "id": "cf0cfe6e-e87f-49b7-b0d9-9c9636349307",
    "number": "17",
    "category": "Gestión Comercial",
    "readTime": "2 min",
    "title": "Quiero dar la baja a Fudo Pagos",
    "description": "Registro de motivos de baja y derivación al CS Leader del país correspondiente.",
    "link": "fudo.la/soporte",
    "updatedStatus": "Actualizado",
    "code": "KB-GES-17",
    "subtitle": "Resolución y pautas operativas para Gestión Comercial.",
    "verificationSteps": [
      {
        "id": "step-1",
        "text": "Consultar y registrar los motivos detallados de la solicitud de baja.",
        "completed": false
      },
      {
        "id": "step-2",
        "text": "Derivar/crear folio con el motivo a: Ronald Perdomo (CL), Karen Gonzalez / German Rios (AR) o Clara Romero (MX).",
        "completed": false
      }
    ],
    "problemHtml": "",
    "reasonHtml": "",
    "solutionHtml": "<p>Registrar motivos de insatisfacción (para folio/nota de derivación). Si insiste debido a falta de funcionalidades específicas, reportar en canal apropiado.<br><br>Derivar/crear folio a:<br><br>Ronald Perdomo (<strong><em>Chile</em></strong>) | Fudo Pagos Chile - CS <br>Karen Gonzalez/German Rios  (<strong><em>Argentina</em></strong>) | Fudo Pagos Argentina - CS <br>Clara Romero (<strong><em>México</em></strong>) | Fudo Pagos México - CS</p>",
    "notesHtml": "",
    "clientResponse": {
      "text": "Lamentamos que estés evaluando dar de baja Fudo Pagos. Para poder asistirte correctamente con la gestión:\n\n📌 ¿Podrías contarnos brevemente el motivo de la baja y un número/horario de contacto?\n\n✅ Vamos a derivar tu solicitud con nuestro equipo de atención para acompañarte en el proceso.",
      "isHomologated": true
    },
    "externalLink": {
      "title": "Base de Conocimiento Fudo",
      "url": "https://soporte.fudo.la",
      "code": "FUDO-KB"
    }
  },
  {
    "id": "2ed6f0cc-b349-432e-b9f5-f1186119c111",
    "number": "18",
    "category": "Reclamo de transacciones",
    "readTime": "2 min",
    "title": "Se duplicó un cobro",
    "description": "Cómo validar un cobro duplicado en Fudo > Cobros y Backoffice antes de gestionar la anulación.",
    "link": "fudo.la/soporte",
    "updatedStatus": "Actualizado",
    "code": "KB-REC-18",
    "subtitle": "Comensal reporta al cliente que se descontó dos veces de su cuenta bancaria el mismo monto",
    "verificationSteps": [
      {
        "id": "step-1",
        "text": "Filtrar en Fudo Pagos > Cobros usando el monto exacto como filtro.",
        "completed": false
      },
      {
        "id": "step-2",
        "text": "2 Aprobadas: se cobran ambas y se abonan al comercio al día hábil siguiente. El comercio debe devolver una al cliente.",
        "completed": false
      },
      {
        "id": "step-3",
        "text": "1 Aprobada + 1 Rechazada / No aparece: solo se abona la aprobada. El banco del cliente revierte en hasta 3 días hábiles. Si no ocurre, escalar a #contact-fudopagos.",
        "completed": false
      },
      {
        "id": "step-4",
        "text": "2 Rechazadas / No aparecen: no hubo cobro efectivo; corresponde realizar nuevamente el pago.",
        "completed": false
      }
    ],
    "problemHtml": "<p>Comensal reporta al cliente que se descontó dos veces de su cuenta bancaria el mismo monto</p>",
    "reasonHtml": "",
    "solutionHtml": "<p>Verificar en <strong>Fudo Pagos &gt; Cobros</strong> utilizando el <strong>monto exacto</strong> como filtro:</p><ol><li><strong>2 transacciones aprobadas:</strong> Se cobran ambas y se abonan al comercio el día hábil siguiente. El comercio debe devolver una al cliente (directo desde terminal si es reciente o mediante devolución administrativa).</li><li><strong>1 aprobada + 1 rechazada / no aparece:</strong> Solo se abona la aprobada al comercio. El banco emisor del cliente revierte automáticamente la retención en un plazo de <strong>hasta 3 días hábiles</strong>. Si no ocurre dentro de ese plazo, escalar a <code>#contact-fudopagos</code>.</li><li><strong>2 rechazadas / no aparecen:</strong> No hubo un cobro efectivo. Corresponde realizar nuevamente el pago en la terminal.</li></ol>",
    "notesHtml": "",
    "clientResponse": {
      "text": "",
      "isHomologated": false
    },
    "externalLink": {
      "title": "Base de Conocimiento Fudo",
      "url": "https://soporte.fudo.la",
      "code": "FUDO-KB"
    }
  },
  {
    "id": "077c20f0-28a0-448d-aaf3-d5a805792a70",
    "number": "19",
    "category": "Error al Cobrar",
    "readTime": "2 min",
    "title": "Tarjeta extranjera rechazada",
    "description": "Qué hacer cuando las tarjetas emitidas en el extranjero son rechazadas mientras las locales funcionan.",
    "link": "fudo.la/soporte",
    "updatedStatus": "Actualizado",
    "code": "KB-ERR-19",
    "subtitle": "Las tarjetas emitidas en otro país se rechazan, pero las locales funcionan.",
    "verificationSteps": [
      {
        "id": "step-1",
        "text": "Confirmar si el rechazo ocurre con una sola tarjeta extranjera o con todas las internacionales.",
        "completed": false
      },
      {
        "id": "step-2",
        "text": "Si rechaza todas las tarjetas internacionales, reportar al equipo de Fudo Pagos para revisar habilitación.",
        "completed": false
      }
    ],
    "problemHtml": "<p>Las tarjetas emitidas en otro país se rechazan, pero las locales funcionan.</p>",
    "reasonHtml": "<p>Restricción del emisor o del adquirente para tarjetas internacionales.</p>",
    "solutionHtml": "<ol><li><p>Probar con otra tarjeta internacional del cliente.</p></li><li><p>Si se rechazan todas las tarjetas extranjeras, reportar: puede requerir una habilitación.</p></li></ol><p></p>",
    "notesHtml": "",
    "clientResponse": {
      "text": "Cuando una tarjeta extranjera es rechazada, suele deberse a restricciones del banco emisor o de habilitación internacional. Te sugerimos:\n\n1️⃣ Verificar con el cliente si tiene habilitadas las compras internacionales en su banco.\n2️⃣ Probar con otra tarjeta internacional si dispone de una.\n\n📌 Si notás que el rechazo ocurre con todas las tarjetas extranjeras, avisanos para revisarlo internamente y validar si requiere habilitación.",
      "isHomologated": true
    },
    "externalLink": {
      "title": "Base de Conocimiento Fudo",
      "url": "https://soporte.fudo.la",
      "code": "FUDO-KB"
    }
  },
  {
    "id": "86e5c404-8078-4f30-b98e-242230cd7e06",
    "number": "20",
    "category": "Reclamo de transacciones",
    "readTime": "2 min",
    "title": "¿Cómo corroborar que un cobro fue rechazado?",
    "description": "Cómo verificar si un cobro fue rechazado (Fudo Cobros, Backoffice y Klap) y qué plazo informar al comensal.",
    "link": "fudo.la/soporte",
    "updatedStatus": "Actualizado",
    "code": "KB-REC-20",
    "subtitle": "Resolución y pautas operativas para Reclamo de transacciones.",
    "verificationSteps": [
      {
        "id": "step-1",
        "text": "Revisar el estado del cobro en Fudo Pagos > Cobros y confirmar en Backoffice Geopagos / Klap si figura Rechazado o Anulado (ver sección Cobros y Liquidación).",
        "completed": false
      }
    ],
    "problemHtml": "",
    "reasonHtml": "",
    "solutionHtml": "<p>El nivel menos fiable para confirmar esto, es la sección de Fudo Pagos <strong>&gt;</strong> Cobros, si se encuentra allí, es un buen comienzo, pero no es definitivo de que la venta se encuentra 100% rechazada. Deberemos revisar el estado del cobro, si figura '<strong>Rechazado</strong>', se hizo la devolución y el comensal deberá esperar hasta 5 o 7 días hábiles para que su banco liquide ese dinero, ante cualquier consulta, que lo verifique con el banco.</p><img src=\"https://fudo-solution-shelf.lovable.app/api/public/img/1742e9cb-6894-4bc4-a632-395a34c4de78.png\"><p><br></p>",
    "notesHtml": "",
    "clientResponse": {
      "text": "Si la operación figura como Rechazada o Anulada en el sistema, el cobro no quedó acreditado y la devolución ya fue emitida.\n\n⏳ El reintegro en la cuenta del comensal puede demorar entre 5 y 7 días hábiles en reflejarse, dependiendo exclusivamente de los tiempos de su banco emisor.\n\n✅ Si pasado ese plazo no lo visualiza, puede consultarlo directamente con su banco presentando el comprobante.",
      "isHomologated": true
    },
    "externalLink": {
      "title": "Base de Conocimiento Fudo",
      "url": "https://soporte.fudo.la",
      "code": "FUDO-KB"
    }
  },
  {
    "id": "a61a8266-67eb-405d-9dcc-5da56f974312",
    "number": "21",
    "category": "Error al Cobrar",
    "readTime": "2 min",
    "title": "PIN incorrecto o no se puede ingresar el PIN",
    "description": "Causas y pasos cuando la terminal rechaza el PIN o la pantalla de ingreso de PIN no responde.",
    "link": "fudo.la/soporte",
    "updatedStatus": "Actualizado",
    "code": "KB-ERR-21",
    "subtitle": "El cliente ingresa el PIN y la terminal lo rechaza, o la pantalla de PIN no responde.",
    "verificationSteps": [
      {
        "id": "step-1",
        "text": "Confirmar si el cliente recibe rechazo por PIN incorrecto (se bloquea tras 3 intentos) o si la pantalla táctil no responde.",
        "completed": false
      }
    ],
    "problemHtml": "<p>El cliente ingresa el PIN y la terminal lo rechaza, o la pantalla de PIN no responde.</p><p></p>",
    "reasonHtml": "",
    "solutionHtml": "<p>PIN mal ingresado (bloqueo tras 3 intentos) o teclado táctil sin respuesta.</p>",
    "notesHtml": "",
    "clientResponse": {
      "text": "Si la terminal presenta problemas al ingresar el PIN, tené en cuenta lo siguiente:\n\n1️⃣ Si el PIN se ingresa de forma incorrecta 3 veces, la tarjeta se bloquea por seguridad y el cliente deberá gestionarlo con su banco o usar otra tarjeta.\n2️⃣ Si la pantalla táctil no responde al tocar los números, limpiá suavemente la pantalla y reiniciá la terminal.\n\n✅ Si la pantalla sigue sin responder después de reiniciar, envianos un video breve del inconveniente para ayudarte.",
      "isHomologated": true
    },
    "externalLink": {
      "title": "Base de Conocimiento Fudo",
      "url": "https://soporte.fudo.la",
      "code": "FUDO-KB"
    }
  },
  {
    "id": "641e6c0f-8f80-4ecf-8987-1aee5558165b",
    "number": "22",
    "category": "Error al Cobrar",
    "readTime": "2 min",
    "title": "Contactless no funciona (no detecta la tarjeta)",
    "description": "Pasos de prueba cuando la terminal no detecta tarjetas, celulares o relojes por contactless (NFC).",
    "link": "fudo.la/soporte",
    "updatedStatus": "Actualizado",
    "code": "KB-ERR-22",
    "subtitle": "La terminal no reacciona al apoyar tarjetas, celulares o relojes.",
    "verificationSteps": [
      {
        "id": "step-1",
        "text": "Indicar al cliente retirar fundas/accesorios y probar acercando la tarjeta 2 segundos sobre el ícono contactless.",
        "completed": false
      },
      {
        "id": "step-2",
        "text": "Si continúa fallando tras reiniciar, indicar cobrar por chip y reportar al equipo de Fudo Pagos.",
        "completed": false
      }
    ],
    "problemHtml": "<p>La terminal no reacciona al apoyar tarjetas, celulares o relojes.</p>",
    "reasonHtml": "<p>NFC desactivado, funda o accesorio interfiriendo, o lector dañado.</p>",
    "solutionHtml": "<ol><li><p>Retirar fundas o accesorios de la terminal.</p></li><li><p>Apoyar la tarjeta sobre el ícono de contactless durante 2 segundos.</p></li><li><p>Reiniciar la terminal. Si continúa, cobrar por chip y reportar.</p></li></ol><p></p>",
    "notesHtml": "",
    "clientResponse": {
      "text": "Para resolver problemas con el lector contactless (NFC), probá estos pasos:\n\n1️⃣ Retirá cualquier funda o accesorio que pueda interferir con la señal.\n2️⃣ Apoyá la tarjeta o dispositivo directamente sobre el ícono de contactless durante 2 segundos sin moverlo.\n3️⃣ Reiniciá la terminal.\n\n💳 Mientras tanto, podés cobrar insertando la tarjeta por chip. Si la falla persiste luego de reiniciar, avisanos para revisarlo.",
      "isHomologated": true
    },
    "externalLink": {
      "title": "Base de Conocimiento Fudo",
      "url": "https://soporte.fudo.la",
      "code": "FUDO-KB"
    }
  },
  {
    "id": "715151e4-6878-4946-9853-aa035887a71a",
    "number": "23",
    "category": "Error Conectividad",
    "readTime": "2 min",
    "title": "La terminal tiene señal pero los cobros figuran \"sin conexión\"",
    "description": "Pasos de conectividad cuando la terminal muestra señal pero los cobros figuran \"sin conexión\".",
    "link": "fudo.la/soporte",
    "updatedStatus": "Actualizado",
    "code": "KB-ERR-23",
    "subtitle": "Cerrar sesión en la app de Fudo y volver a ingresar. Probar con otra red Wi-Fi. Reinicio completo de la batería: \"-Apague la terminal -Retire la bateria (ubicada bajo la tapa en la parte trasera de la terminal) -Espere 20 minutos -Conecte el cargador original a la terminal y deje la terminal cargando hasta al menos un 40%. Luego encender\" Si persiste, reportar. Si solo falla con la red del local, reportar indicando el proveedor de internet.",
    "verificationSteps": [
      {
        "id": "step-1",
        "text": "Indicar cerrar sesión en la app de Fudo, probar con otra red Wi-Fi (ej. compartiendo datos) y hacer reinicio completo de batería.",
        "completed": false
      },
      {
        "id": "step-2",
        "text": "Si solo falla con el Wi-Fi del local, solicitar el proveedor de internet y reportar.",
        "completed": false
      }
    ],
    "problemHtml": "<ol><li><p>Cerrar sesión en la app de Fudo y volver a ingresar.</p></li><li><p>Probar con otra red Wi-Fi.</p></li><li><p>Reinicio completo de la batería:<br><br>\"-Apague la terminal</p><p>-Retire la bateria (ubicada bajo la tapa en la parte trasera de la terminal)</p><p>-Espere 20 minutos</p><p>-Conecte el cargador original a la terminal y deje la terminal cargando hasta al menos un 40%. Luego encender\"</p><p></p></li></ol><p>Si persiste, reportar.<br></p><blockquote><p>Si solo falla con la red del local, reportar indicando el proveedor de internet.</p></blockquote><p></p>",
    "reasonHtml": "<p>Red con portal cautivo, firewall del local o DNS bloqueado.</p>",
    "solutionHtml": "<ol><li>Cerrar sesión en la app de Fudo y volver a ingresar.</li><li>Probar con otra red Wi-Fi (por ejemplo, compartiendo datos desde un celular).</li><li>Realizar un reinicio completo de batería:<ul><li>Apagar la terminal.</li><li>Retirar la batería (bajo la tapa trasera).</li><li>Esperar 20 minutos.</li><li>Conectar el cargador original y dejar cargando hasta al menos un 40%. Luego encender.</li></ul></li></ol><p>Si persiste, reportar. Si solo falla con la red del local, reportar indicando el proveedor de internet.</p>",
    "notesHtml": "",
    "clientResponse": {
      "text": "Cuando la terminal tiene señal pero figura \"sin conexión\", suele ser un bloqueo de la red o caché de la app. Probá estos pasos en orden:\n\n1️⃣ Cerrá sesión en la app de Fudo y volvé a ingresar.\n2️⃣ Probá conectando la terminal a otra red (por ejemplo, compartiendo internet desde un celular) para descartar bloqueos del Wi-Fi del local.\n3️⃣ Si continúa, realizá un reinicio de batería:\n   🔋 Apagá la terminal y retirá la batería trasera.\n   ⏱️ Esperá 20 minutos.\n   🔌 Conectá el cargador original, dejala cargar al menos al 40% y encendela.\n\n✅ Si el problema solo ocurre con tu red local, contanos cuál es tu proveedor de internet para revisarlo.",
      "isHomologated": true
    },
    "externalLink": {
      "title": "Base de Conocimiento Fudo",
      "url": "https://soporte.fudo.la",
      "code": "FUDO-KB"
    }
  },
  {
    "id": "4efee2ce-8916-4270-ac1f-d149babd0ce6",
    "number": "24",
    "category": "Error al Cobrar",
    "readTime": "2 min",
    "title": "No lee la tarjeta por chip",
    "description": "Pasos de limpieza y prueba cuando la terminal no lee la tarjeta al insertarla por chip.",
    "link": "fudo.la/soporte",
    "updatedStatus": "Actualizado",
    "code": "KB-ERR-24",
    "subtitle": "Al insertar la tarjeta, la terminal no la reconoce o pide reintentar.",
    "verificationSteps": [
      {
        "id": "step-1",
        "text": "Recordar que la terminal no acepta banda magnética (solo chip o contactless).",
        "completed": false
      },
      {
        "id": "step-2",
        "text": "Si luego de limpiar la ranura y probar otra tarjeta sigue fallando, reportar.",
        "completed": false
      }
    ],
    "problemHtml": "<p>Al insertar la tarjeta, la terminal no la reconoce o pide reintentar.</p>",
    "reasonHtml": "<p>Ranura sucia, chip dañado o lector con falla.</p>",
    "solutionHtml": "<p>1. Limpiar la ranura del chip con aire o un paño seco.</p><p>2. Probar con otra tarjeta.</p><p>3. Reiniciar la terminal.</p>",
    "notesHtml": "<p>La terminal no acepta cobros con banda magnética, solo por chip o contactless</p>",
    "clientResponse": {
      "text": "Si la terminal no lee la tarjeta por chip, te sugerimos probar lo siguiente:\n\n1️⃣ Limpiá suavemente la ranura del chip con aire o un paño seco (sin líquidos).\n2️⃣ Probá con otra tarjeta para descartar que el chip esté dañado.\n3️⃣ Reiniciá la terminal.\n\n📌 Recordá que el equipo opera únicamente por chip o contactless (no acepta banda magnética). Si falla con todas las tarjetas, avisanos para revisarlo.",
      "isHomologated": true
    },
    "externalLink": {
      "title": "Base de Conocimiento Fudo",
      "url": "https://soporte.fudo.la",
      "code": "FUDO-KB"
    }
  },
  {
    "id": "3ba6ebb3-c176-4f5b-98b0-3b83560e0dbc",
    "number": "25",
    "category": "Error Dispositivo",
    "readTime": "2 min",
    "title": "La terminal no enciende",
    "description": "Verificación de cargador, batería y reinicio eléctrico cuando la terminal no enciende.",
    "link": "fudo.la/soporte",
    "updatedStatus": "Actualizado",
    "code": "KB-ERR-25",
    "subtitle": "La terminal no responde al mantener presionado el botón de encendido, aun después de cargarla.",
    "verificationSteps": [
      {
        "id": "step-1",
        "text": "Pedir al cliente probar otro cargador/enchufe, revisar colocación de la batería y realizar reinicio de 20 min.",
        "completed": false
      },
      {
        "id": "step-2",
        "text": "Si no enciende ni carga, solicitar un video donde se vea la conexión y reportar.",
        "completed": false
      }
    ],
    "problemHtml": "<p>La terminal no responde al mantener presionado el botón de encendido, aun después de cargarla.</p>",
    "reasonHtml": "<p>Cargador defectuoso, batería desconectada por golpe, o circuito de carga bloqueado.</p>",
    "solutionHtml": "<p><strong>Procedimiento operativo para terminal que no enciende / no carga:</strong></p><ol><li>Apagar la terminal y retirar la batería trasera.</li><li>Esperar <strong>20 minutos</strong>.</li><li>Colocar la batería, conectar con cargador original y cargar hasta <strong>al menos 40% mínimo</strong> antes de encender.</li><li>Si no carga: solicitar al cliente un <strong>video mostrando la conexión</strong>.</li><li><strong>Prueba extendida si persiste:</strong> dejar la terminal conectada al cargador durante <strong>más de 1 día (24 horas continuas)</strong> para reactivar celdas descargadas en profundidad.</li><li>Si continúa sin responder: derivar a Soporte Fudo Pagos mediante folio.</li></ol>",
    "notesHtml": "",
    "clientResponse": {
      "text": "Para intentar recuperar la terminal cuando no enciende, seguí estos pasos:\n\n1️⃣ Probá con otro cable/cargador y otro enchufe.\n2️⃣ Abrí la tapa trasera y verificá que la batería esté bien encastrada.\n3️⃣ Realizá un reinicio completo de batería:\n   🔋 Apagá la terminal y retirá la batería.\n   ⏱️ Esperá 20 minutos.\n   🔌 Conectá el cargador original y dejala cargando hasta al menos un 40% antes de encenderla.\n\n🎥 Si notás que no carga ni enciende, por favor envianos un video breve donde se vea la conexión al cargador para gestionarlo.",
      "isHomologated": true
    },
    "externalLink": {
      "title": "Base de Conocimiento Fudo",
      "url": "https://soporte.fudo.la",
      "code": "FUDO-KB"
    }
  },
  {
    "id": "86090843-12eb-42d6-9b7b-247fbc759d79",
    "number": "26",
    "category": "Reclamo de transacciones",
    "readTime": "4 min",
    "title": "Cancelar un pago desde la terminal (CL y AR)",
    "description": "Procedimiento para cancelar un cobro reciente desde la terminal antes de que se envíe a liquidar.",
    "link": "fudo.la/soporte",
    "updatedStatus": "Actualizado",
    "code": "KB-REC-26",
    "subtitle": "Operación diaria: reversa en el mismo día sin haber liquidado, desde cualquier máquina.",
    "verificationSteps": [
      {
        "id": "step-1",
        "text": "Confirmar que sea en el mismo día y que el cobro aún NO se haya enviado a liquidar (si el botón no aparece, ya liquidó y pasa a anulación por soporte).",
        "completed": false
      },
      {
        "id": "step-2",
        "text": "Se puede realizar desde CUALQUIER terminal del local: no hace falta saber el ID ni usar la misma máquina donde se cobró.",
        "completed": false
      },
      {
        "id": "step-3",
        "text": "Verificar en Fudo Web: en Cobros se reflejarán 2 registros (+ venta original y - devolución).",
        "completed": false
      },
      {
        "id": "step-4",
        "text": "Cobrar nuevamente la mesa con otro medio de pago si corresponde.",
        "completed": false
      }
    ],
    "problemHtml": "",
    "reasonHtml": "",
    "solutionHtml": "<p><strong>Procedimiento en la terminal (CL y AR):</strong></p><ol><li><strong>Menú &rarr; Fudo Pagos &rarr; Cobros:</strong> acceder al listado de transacciones.</li><li><strong>Buscar el cobro:</strong> filtrar por fecha y estado. <em>No hace falta el ID ni utilizar la misma máquina física.</em></li><li><strong>Tocar \"Devolver dinero\":</strong> disponible solo si aún no se envió a liquidar.</li><li><strong>El cliente apoya o inserta la misma tarjeta</strong> con la que se realizó la venta original.</li><li><strong>\"Devolución confirmada\":</strong> la terminal imprime automáticamente el comprobante de devolución.</li><li><strong>Cobrar la mesa de nuevo</strong> con el medio de pago que elija el cliente.</li></ol><div style=\"background:#f8fafc;border:1px solid #e2e8f0;padding:12px;border-radius:12px;margin-top:12px;\"><p><strong>Puntos clave de soporte:</strong></p><ul><li><strong>El mismo día:</strong> Solo mientras no se envió a liquidar. Sin el botón \"Devolver dinero\", ya liquidó: es una devolución administrativa y la gestiona soporte.</li><li><strong>Desde cualquier terminal:</strong> No hace falta el ID ni la misma máquina donde se cobró originalmente.</li><li><strong>En Fudo Web:</strong> La sección Cobros muestra 2 registros: <code>+ venta original</code> y <code>- devolución</code>.</li></ul></div>",
    "notesHtml": "<p>Si al abrir el cobro en la terminal el botón \"Devolver dinero\" ya no está disponible, significa que ese cobro ya se envió a liquidar.<br><br>Se deberá contar con la misma tarjeta con la cual se realizó el cobro para proceder.</p>",
    "clientResponse": {
      "text": "Si el cobro se realizó hoy y aún no fue enviado a liquidar, podés cancelarlo directamente desde cualquier terminal del local:\n\n1️⃣ Ingresá al Menú > Fudo Pagos > Cobros.\n2️⃣ Buscá el cobro (filtrá por fecha/estado; no necesitás el ID ni usar la misma máquina).\n3️⃣ Tocá \"Devolver dinero\".\n4️⃣ Pedile al cliente que apoye o inserte la misma tarjeta con la que pagó.\n5️⃣ Verás \"Devolución confirmada\" y se imprimirá el comprobante.\n6️⃣ Luego podés volver a cobrar la mesa con el medio de pago correspondiente.\n\n📌 En Fudo Web verás reflejados ambos registros (+ venta y - devolución). Si el botón ya no aparece, avisanos para gestionarlo como devolución administrativa.",
      "isHomologated": true
    },
    "externalLink": {
      "title": "Base de Conocimiento Fudo",
      "url": "https://soporte.fudo.la",
      "code": "FUDO-KB"
    }
  },
  {
    "id": "59fd641b-9c8a-4397-99bb-fadeed660fb8",
    "number": "27",
    "category": "Error al Cobrar",
    "readTime": "2 min",
    "title": "Error \"El método de pago no existe\"",
    "description": "Qué validar cuando al intentar cobrar aparece \"Múltiples errores: El método de pago no existe\".",
    "link": "fudo.la/soporte",
    "updatedStatus": "Actualizado",
    "code": "KB-ERR-27",
    "subtitle": "Al seleccionar Fudo Pagos y tocar Cobrar aparece \"Múltiples errores: El método de pago no existe\".",
    "verificationSteps": [
      {
        "id": "step-1",
        "text": "Verificar en Dash si Fudo Pagos está habilitado o si le falta completar el registro.",
        "completed": false
      },
      {
        "id": "step-2",
        "text": "Si ya completó el registro pero sigue sin autorización para operar, reportar a Fudo Pagos CS.",
        "completed": false
      }
    ],
    "problemHtml": "<p>Al seleccionar Fudo Pagos y tocar Cobrar aparece \"Múltiples errores: El método de pago no existe\".</p>",
    "reasonHtml": "<p>FudoPagos no está habilitado en la cuenta del comercio.</p>",
    "solutionHtml": "<p>Este error indica que Fudo Pagos no está habilitado en la cuenta. Debería darse aviso al cliente de completar el registro en caso de que no esté finalizado, y en caso de que únicamente no esté autorizado a operar, deberá reportarse al equipo de Fudo Pagos CS</p>",
    "notesHtml": "",
    "clientResponse": {
      "text": "Este mensaje aparece cuando Fudo Pagos todavía no está habilitado en la cuenta.\n\n📌 Por favor verificá si tenés pendiente algún paso en tu registro/activación dentro de Fudo.\n\n✅ Si ya completaste todo el registro, avisanos para revisarlo internamente y habilitar la operación cuanto antes.",
      "isHomologated": true
    },
    "externalLink": {
      "title": "Base de Conocimiento Fudo",
      "url": "https://soporte.fudo.la",
      "code": "FUDO-KB"
    }
  },
  {
    "id": "f98b721f-c5e4-4bc6-b014-f2f7a822dff9",
    "number": "28",
    "category": "Error Conectividad",
    "readTime": "2 min",
    "title": "No conecta a 4G / Solo 3G - CHILE",
    "description": "Pasos para recuperar señal 4G en Chile (recolocar SIM y validar configuración de operador).",
    "link": "drive.google.com/file/u/2/d/1ykphCCiDlIQAuQjMQEDExWae49iSDiTT/view",
    "updatedStatus": "Actualizado",
    "code": "KB-ERR-28",
    "subtitle": "La terminal con chip no toma señal o la pierde de forma intermitente.",
    "verificationSteps": [
      {
        "id": "step-1",
        "text": "Enviar guía de recolocación de SIM y video/tutorial de configuración de operador en Chile.",
        "completed": false
      },
      {
        "id": "step-2",
        "text": "Si sigue sin señal, reportar (posible recambio de SIM o intermitencia local de Entel).",
        "completed": false
      }
    ],
    "problemHtml": "<p>La terminal con chip no toma señal o la pierde de forma intermitente.</p>",
    "reasonHtml": "<p>SIM mal insertada, operador mal configurado o SIM dañada.</p>",
    "solutionHtml": "<p>1. Apagar la terminal, retirar la SIM, volver a colocarla y encender.<br>2. Verificar que el operador esté configurado como indica el tutorial <a target=\"_blank\" rel=\"noopener noreferrer nofollow\" href=\"https://drive.google.com/file/u/2/d/1ykphCCiDlIQAuQjMQEDExWae49iSDiTT/view\">https://drive.google.com/file/u/2/d/1ykphCCiDlIQAuQjMQEDExWae49iSDiTT/view</a>.<br><br> Si sigue sin señal, reportar: puede requerir un recambio de SIM, o puede que solo sea una intermitencia de Entel en la localidad.</p>",
    "notesHtml": "",
    "clientResponse": {
      "text": "Para recuperar la señal 4G en tu terminal en Chile, seguí estos pasos:\n\n1️⃣ Apagá la terminal, retirá la tarjeta SIM, volvé a colocarla firme y encendela.\n2️⃣ Verificá que el operador móvil esté configurado correctamente según el instructivo.\n\n📶 Si después de esto continúa sin tomar señal o solo conecta en 3G, avisanos indicando tu comuna/localidad para revisarlo.",
      "isHomologated": true
    },
    "externalLink": {
      "title": "drive.google.com",
      "url": "https://drive.google.com/file/u/2/d/1ykphCCiDlIQAuQjMQEDExWae49iSDiTT/view",
      "code": "28"
    }
  },
  {
    "id": "6b6b0947-c5e2-40d4-a5b2-dbde99d98df9",
    "number": "29",
    "category": "Error Dispositivo",
    "readTime": "2 min",
    "title": "La terminal no carga",
    "description": "Pasos de prueba cuando la terminal no carga o el conector se siente flojo.",
    "link": "fudo.la/soporte",
    "updatedStatus": "Actualizado",
    "code": "KB-ERR-29",
    "subtitle": "No carga o el conector está flojo",
    "verificationSteps": [
      {
        "id": "step-1",
        "text": "Indicar probar otro cable/cargador, limpiar puerto y realizar reinicio de batería de 20 min.",
        "completed": false
      },
      {
        "id": "step-2",
        "text": "Si no carga, solicitar video mostrando la conexión y reportar.",
        "completed": false
      }
    ],
    "problemHtml": "<p>No carga o el conector está flojo</p>",
    "reasonHtml": "<p>Cable, batería o cargador dañado, puerto sucio o flojo.</p>",
    "solutionHtml": "<ol><li><p>Probar con otro cable y otro cargador.</p></li><li><p>Limpiar el puerto de carga con aire.</p></li><li><p>Reinicio completo de la batería:<br><br>\"-Apague la terminal</p><p>-Retire la bateria (ubicada bajo la tapa en la parte trasera de la terminal)</p><p>-Espere 20 minutos</p><p>-Conecte el cargador original a la terminal y deje la terminal cargando hasta al menos un 40%. En caso de que no cargue, le pido un video de esto, donde se vea la conexión por favor\"<br></p></li></ol><p>Si no carga, reportar</p>",
    "notesHtml": "",
    "clientResponse": {
      "text": "Si la terminal no está cargando correctamente, probá estos pasos:\n\n1️⃣ Probá con otro cable USB-C y otro adaptador de corriente.\n2️⃣ Limpiá suavemente el puerto de carga con aire (sin objetos metálicos).\n3️⃣ Realizá un reinicio completo de batería:\n   🔋 Apagá la terminal y retirá la batería trasera.\n   ⏱️ Esperá 20 minutos.\n   🔌 Conectá el cargador original y dejala cargando hasta al menos un 40%.\n\n🎥 Si sigue sin cargar, por favor envianos un video breve donde se vea la terminal conectada para ayudarte.",
      "isHomologated": true
    },
    "externalLink": {
      "title": "Base de Conocimiento Fudo",
      "url": "https://soporte.fudo.la",
      "code": "FUDO-KB"
    }
  },
  {
    "id": "858ff1ac-6723-4da9-9d9d-f0f638da336b",
    "number": "30",
    "category": "Error Conectividad",
    "readTime": "2 min",
    "title": "La terminal no tiene señal - ARG/MX",
    "description": "Diagnóstico cuando la terminal con chip no toma señal en Argentina o México.",
    "link": "fudo.la/soporte",
    "updatedStatus": "Actualizado",
    "code": "KB-ERR-30",
    "subtitle": "La terminal con chip no toma señal o la pierde de forma intermitente.",
    "verificationSteps": [
      {
        "id": "step-1",
        "text": "Confirmar si conectada por Wi-Fi logra cobrar (para descartar falla de la app).",
        "completed": false
      },
      {
        "id": "step-2",
        "text": "Si persiste sin señal móvil tras reiniciar datos y batería, relevar y reportar.",
        "completed": false
      }
    ],
    "problemHtml": "<p>La terminal con chip no toma señal o la pierde de forma intermitente.</p>",
    "reasonHtml": "<p>A relevar con soporte AR y MX (operador y configuración APN).</p>",
    "solutionHtml": "<p>1. Conectar la terminal a una red Wi-Fi y probar si cobra. Así se descarta si el problema es la señal móvil.<br>2. Desactivar los datos móviles y volver a activarlos.<br>3. Reinicio completo de la batería:<br><br>\"-Apague la terminal</p><p>-Retire la bateria (ubicada bajo la tapa en la parte trasera de la terminal)</p><p>-Espere 20 minutos</p><p>-Conecte el cargador original a la terminal y deje la terminal cargando hasta al menos un 40%. Encender y verificar\"</p><p></p><p>Si persiste, reportar.<br><br></p>",
    "notesHtml": "",
    "clientResponse": {
      "text": "Para diagnosticar la falta de señal móvil en tu terminal, probá estos pasos:\n\n1️⃣ Conectá la terminal a una red Wi-Fi y verificá si podés cobrar con normalidad.\n2️⃣ Desactivá los datos móviles, esperá unos segundos y volvé a activarlos.\n3️⃣ Si continúa sin señal, realizá un reinicio completo:\n   🔋 Apagá la terminal, retirá la batería 20 minutos, volvé a colocarla y cargala al menos al 40%.\n\n✅ Si el problema persiste, contanos qué operador y localidad tenés para reportarlo.",
      "isHomologated": true
    },
    "externalLink": {
      "title": "Base de Conocimiento Fudo",
      "url": "https://soporte.fudo.la",
      "code": "FUDO-KB"
    }
  },
  {
    "id": "19f176f0-2eab-491a-9138-18b74ce6a9c7",
    "number": "31",
    "category": "Error Conectividad",
    "readTime": "2 min",
    "title": "La terminal no se conecta a Wi-Fi",
    "description": "Pasos para reconectar la terminal cuando no se conecta o se desconecta del Wi-Fi.",
    "link": "fudo.la/soporte",
    "updatedStatus": "Actualizado",
    "code": "KB-ERR-31",
    "subtitle": "La terminal no se conecta a la red del local o se desconecta seguido.",
    "verificationSteps": [
      {
        "id": "step-1",
        "text": "Indicar olvidar la red, probar compartiendo datos de un celular y realizar reinicio de batería si persiste.",
        "completed": false
      }
    ],
    "problemHtml": "<p>La terminal no se conecta a la red del local o se desconecta seguido.</p>",
    "reasonHtml": "<p>Contraseña incorrecta, red saturada o fuera de alcance.</p>",
    "solutionHtml": "<ol><li><p>Olvidar la red y volver a conectarse.</p></li><li><p>Probar con otra red (por ejemplo, compartiendo datos desde un celular).</p></li><li><p>Reinicio completo de la batería:<br><br>\"-Apague la terminal</p><p>-Retire la bateria (ubicada bajo la tapa en la parte trasera de la terminal)</p><p>-Espere 20 minutos</p><p>-Conecte el cargador original a la terminal y deje la terminal cargando hasta al menos un 40%. Encender y verificar\"</p><p></p></li></ol><p>Si persiste, reportar.</p><p></p>",
    "notesHtml": "",
    "clientResponse": {
      "text": "Para solucionar inconvenientes con la conexión Wi-Fi, probá estos pasos:\n\n1️⃣ En los ajustes de Wi-Fi de la terminal, seleccioná \"Olvidar red\" y volvé a ingresar la contraseña.\n2️⃣ Probá conectando la terminal a otra red (por ejemplo, compartiendo datos desde un celular) para descartar un bloqueo de la red del local.\n3️⃣ Si sigue sin conectar, apagá la terminal, retirá la batería 20 minutos, volvé a colocarla y cargala al menos al 40%.\n\n✅ Avisanos si logra conectarse o si el error persiste.",
      "isHomologated": true
    },
    "externalLink": {
      "title": "Base de Conocimiento Fudo",
      "url": "https://soporte.fudo.la",
      "code": "FUDO-KB"
    }
  },
  {
    "id": "e6266dad-5cda-4776-a791-ce22d16fcec8",
    "number": "32",
    "category": "Impresora Integrada",
    "readTime": "4 min",
    "title": "La terminal no imprime",
    "description": "Pasos de prueba y calibración (HardwareTest / Hue calibration según país) cuando la terminal no imprime.",
    "link": "fudo.la/soporte",
    "updatedStatus": "Actualizado",
    "code": "KB-IMP-32",
    "subtitle": "Al tocar imprimir, la terminal no responde o no sale papel.",
    "verificationSteps": [
      {
        "id": "step-1",
        "text": "Verificar batería >10% (requisito crítico: la impresora no dispara si la carga es menor).",
        "completed": false
      },
      {
        "id": "step-2",
        "text": "Confirmar orientación correcta del rollo (papel térmico desenrollando desde abajo hacia la salida).",
        "completed": false
      },
      {
        "id": "step-3",
        "text": "En la app de Fudo: Configuración > Impresoras > seleccionar impresora > Imprimir prueba.",
        "completed": false
      },
      {
        "id": "step-4",
        "text": "Si no imprime, realizar calibración según país (Hue calibration al 130% en CL con video de Print Sample; HardwareTest > Printer Test en AR/MX).",
        "completed": false
      },
      {
        "id": "step-5",
        "text": "Si continúa: realizar reinicio completo retirando batería durante 20 minutos, cargar al 40% y volver a probar.",
        "completed": false
      }
    ],
    "problemHtml": "<p>Al tocar imprimir, la terminal no responde o no sale papel.</p>",
    "reasonHtml": "<p>Rollo mal colocado o agotado, impresora no configurada en la app o Fudo Pagos no habilitado.</p>",
    "solutionHtml": "<p><strong>Procedimiento oficial ante fallas de impresión (Flujo de Trabajo):</strong></p><ol><li><strong>Verificar batería &gt; 10%:</strong> <em>Requisito crítico.</em> La terminal bloquea el cabezal térmico de impresión si el nivel de batería es igual o inferior al 10%. Conectar cargador si está baja.</li><li><strong>Confirmar orientación correcta del rollo:</strong> El papel térmico debe salir por la ranura con el lado sensible hacia el cabezal.</li><img src=\"https://fudo-solution-shelf.lovable.app/api/public/img/9372fe61-7e2b-4bb0-b312-f2a282d8c5d5.png\"><li><strong>Prueba desde Fudo App:</strong> Configuración &gt; Impresoras &gt; Seleccionar la impresora &gt; Imprimir prueba.</li><li><strong>Calibración o test de hardware:</strong><ul><li><strong>Chile:</strong> Configuración (tuerca) &gt; PRINTER &gt; llevar la línea de <em>\"Hue calibration\"</em> hasta el final hacia la derecha (130%) &gt; <em>Print Sample</em> (solicitar video de esta prueba) &gt; reiniciar.</li><li><strong>Argentina / México:</strong> Abrir la app <em>“HardwareMan…”</em> &gt; <em>“HardwareTest”</em> &gt; saltar los tests con ‘Skip’ excepto el último: <em>Printer Test</em>.</li></ul></li><li><strong>Reinicio completo de batería si continúa:</strong> Apagar la terminal, retirar la batería trasera por 20 minutos, colocar nuevamente, cargar con cargador original hasta al menos 40% y volver a probar.</li><li>Si tras todos los pasos persiste: derivar a Soporte Fudo Pagos con fotos/video y datos del comercio.</li></ol>",
    "notesHtml": "",
    "clientResponse": {
      "text": "Para resolver el inconveniente con la impresión en tu terminal, por favor seguí estos pasos en orden:\n\n1️⃣ 🔋 Batería mayor a 10%: verificá que la terminal tenga más del 10% de carga (si tiene menos, el sistema bloquea la impresión automáticamente por seguridad; conectala al cargador).\n2️⃣ 🧻 Rollo de papel: corroborá que el rollo esté colocado con el papel saliendo hacia arriba desde la base del compartimento.\n3️⃣ ⚙️ Prueba en Fudo: andá a Configuración > Impresoras > tocá tu impresora y seleccioná \"Imprimir prueba\".\n4️⃣ 🛠️ Si no imprime:\n   • 🇨🇱 Chile: andá a Configuración (ícono tuerca) > PRINTER > deslizá \"Hue calibration\" al 130% > tocá \"Print Sample\" (envianos un video breve) y reiniciá.\n   • 🇦🇷🇲🇽 Argentina / México: abrí la app \"HardwareMan...\" > HardwareTest > avanzá con \"Skip\" hasta realizar el Printer Test.\n5️⃣ 🔄 Si continúa, realizá un reinicio de batería retirándola durante 20 minutos y cargando al 40% antes de encender.\n\n✅ Si después de estas pruebas sigue sin imprimir, avisanos para gestionarlo de inmediato.",
      "isHomologated": true
    },
    "externalLink": {
      "title": "Base de Conocimiento Fudo",
      "url": "https://soporte.fudo.la",
      "code": "FUDO-KB"
    }
  },
  {
    "id": "f013090b-b4fd-4a91-bc3b-15c385fc2af1",
    "number": "33",
    "category": "Impresora Integrada",
    "readTime": "3 min",
    "title": "Impresión borrosa o muy clara",
    "description": "Ajuste de contraste / calibración de impresora cuando los tickets salen borrosos o muy claros.",
    "link": "fudo.la/soporte",
    "updatedStatus": "Actualizado",
    "code": "KB-IMP-33",
    "subtitle": "Las impresiones salen poco legibles",
    "verificationSteps": [
      {
        "id": "step-1",
        "text": "Verificar batería >10% y calidad/colocación de rollo térmico.",
        "completed": false
      },
      {
        "id": "step-2",
        "text": "Chile: ingresar a Configuración > PRINTER > subir Hue calibration al 130% > Print Sample (pedir video) y reiniciar.",
        "completed": false
      },
      {
        "id": "step-3",
        "text": "Argentina / México: abrir HardwareMan... > HardwareTest > Printer Test.",
        "completed": false
      },
      {
        "id": "step-4",
        "text": "Si continúa: reinicio completo de batería retirándola 20 min y recargar al 40%.",
        "completed": false
      }
    ],
    "problemHtml": "<p>Las impresiones salen poco legibles</p>",
    "reasonHtml": "<p>Nivel de contraste bajo en los ajustes de impresión.</p>",
    "solutionHtml": "<p><strong>Procedimiento ante impresión clara o borrosa:</strong></p><ol><li><strong>Batería &gt; 10%:</strong> Asegurar que la batería no esté por debajo del 10%, ya que baja el voltaje de calentamiento del cabezal térmico.</li><li><strong>Calibración de intensidad / contraste:</strong><ul><li><strong>Chile:</strong> Ir a Configuración en la terminal (tuerca) &gt; PRINTER &gt; subir la barra de <em>\"Hue calibration\"</em> al máximo (130%) &gt; presionar <em>Print Sample</em> (solicitar video al cliente) &gt; reiniciar la terminal.</li><li><strong>Argentina / México:</strong> Ingresar a la app <em>“HardwareMan…”</em> &gt; <em>“HardwareTest”</em> &gt; saltar con ‘Skip’ hasta el <em>Printer Test</em> para forzar impresión directa de fábrica.</li></ul></li><li><strong>Reinicio de batería si persiste:</strong> Retirar batería 20 minutos, recargar con cargador original al 40% y reintentar.</li></ol>",
    "notesHtml": "",
    "clientResponse": {
      "text": "Si las impresiones salen claras o con poca tinta, te recomendamos calibrar la intensidad del cabezal:\n\n1️⃣ 🔋 Verificá que la terminal tenga más del 10% de batería (con carga baja disminuye la fuerza de impresión).\n2️⃣ Calibrá según tu país:\n   • 🇨🇱 Chile: entrá a Configuración (tuerca) > PRINTER > llevá \"Hue calibration\" al máximo (130%) > tocá Print Sample y reiniciá la terminal.\n   • 🇦🇷🇲🇽 Argentina / México: abrí la app \"HardwareMan...\" > HardwareTest y ejecutá el Printer Test.\n3️⃣ 🔄 Si persiste, retirá la batería durante 20 minutos, volvé a conectarla y cargala hasta al menos el 40%.\n\n📹 Si en Chile sigue saliendo borroso, por favor envianos un video al presionar Print Sample para ayudarte.",
      "isHomologated": true
    },
    "externalLink": {
      "title": "Base de Conocimiento Fudo",
      "url": "https://soporte.fudo.la",
      "code": "FUDO-KB"
    }
  },
  {
    "id": "351c4e03-8cca-4977-b1cb-d0320aebc8cb",
    "number": "34",
    "category": "Impresora Integrada",
    "readTime": "2 min",
    "title": "Letra muy chica o márgenes grandes en las impresiones",
    "description": "Cómo agrandar la letra o ajustar márgenes de impresión desde la app de Fudo.",
    "link": "fudo.la/soporte",
    "updatedStatus": "Actualizado",
    "code": "KB-IMP-34",
    "subtitle": "El ticket se imprime con letra pequeña o con mucho espacio en blanco.",
    "verificationSteps": [
      {
        "id": "step-1",
        "text": "Confirmar que el cliente tiene configurada la impresora dentro de la app de Fudo.",
        "completed": false
      }
    ],
    "problemHtml": "<p>El ticket se imprime con letra pequeña o con mucho espacio en blanco.</p>",
    "reasonHtml": "<p>Tamaño de letra configurado en pequeño en la app de Fudo.</p>",
    "solutionHtml": "<p>En la app de Fudo: Configuración &gt; Impresoras &gt; Seleccionar la impresora &gt; Editar y modificar el tamaño de letra.</p><img src=\"https://fudo-solution-shelf.lovable.app/api/public/img/ad378600-9d5b-4690-9cfe-b429e2880b56.png\"><p></p>",
    "notesHtml": "",
    "clientResponse": {
      "text": "Podés ajustar el tamaño de letra de tus comprobantes directamente desde la app de Fudo:\n\n1️⃣ Ingresá a Configuración > Impresoras.\n2️⃣ Seleccioná la impresora de la terminal.\n3️⃣ Tocá Editar y modificá el tamaño de letra según tu preferencia.\n\n✅ Guardá los cambios y hacé una impresión de prueba.",
      "isHomologated": true
    },
    "externalLink": {
      "title": "Base de Conocimiento Fudo",
      "url": "https://soporte.fudo.la",
      "code": "FUDO-KB"
    }
  },
  {
    "id": "26a41168-04a2-4886-a755-6737b0e358b7",
    "number": "35",
    "category": "Gestión Común",
    "readTime": "2 min",
    "title": "¿Cómo modifico los datos del comprobante/voucher?",
    "description": "Dónde editar los datos del comercio que aparecen en el comprobante/voucher desde Administración > Fudo Pagos.",
    "link": "fudo.la/soporte",
    "updatedStatus": "Actualizado",
    "code": "KB-GES-35",
    "subtitle": "Resolución y pautas operativas para Gestión Común.",
    "verificationSteps": [
      {
        "id": "step-1",
        "text": "Indicar al cliente la ruta dentro de Fudo Web para actualizar los datos del voucher.",
        "completed": false
      }
    ],
    "problemHtml": "",
    "reasonHtml": "",
    "solutionHtml": "<p>Esto puedo editarse en la sección Administración<strong> &gt; </strong>Fudo Pagos: </p><img src=\"https://fudo-solution-shelf.lovable.app/api/public/img/e5aade66-9a4a-4c03-ac99-45bd3637147c.png\"><p></p>",
    "notesHtml": "",
    "clientResponse": {
      "text": "Podés modificar los datos que figuran en tus comprobantes directamente desde Fudo Web:\n\n1️⃣ Ingresá a Administración > Fudo Pagos.\n2️⃣ Editá los campos visibles del comprobante/voucher y guardá los cambios.\n\n✅ Los próximos cobros ya saldrán con la información actualizada.",
      "isHomologated": true
    },
    "externalLink": {
      "title": "Base de Conocimiento Fudo",
      "url": "https://soporte.fudo.la",
      "code": "FUDO-KB"
    }
  },
  {
    "id": "5e58b05d-2d6d-479d-b3e0-668b6445d459",
    "number": "36",
    "category": "Error Dispositivo",
    "readTime": "2 min",
    "title": "\"Modo seguro\" o \"Active Device\" (Bloqueo permanente)",
    "description": "Diagnóstico y relevamiento de datos cuando la terminal muestra \"Modo seguro\" o \"Active Device\".",
    "link": "fudo.la/soporte",
    "updatedStatus": "Actualizado",
    "code": "KB-ERR-36",
    "subtitle": "Bloqueo crítico de sensores por golpe o manipulación: la única salida es el recambio.",
    "verificationSteps": [
      {
        "id": "step-1",
        "text": "Confirmar diagnóstico en pantalla: la terminal indica \"Modo seguro\" o \"Active Device\".",
        "completed": false
      },
      {
        "id": "step-2",
        "text": "Explicar al cliente: es un bloqueo permanente de seguridad ante golpe fuerte, caída o manipulación detectada por los sensores.",
        "completed": false
      },
      {
        "id": "step-3",
        "text": "No intentar reinicios forzados: la única salida técnica es reemplazar el equipo.",
        "completed": false
      },
      {
        "id": "step-4",
        "text": "Relevar datos obligatorios: Número de serie, nombre del comercio, dirección exacta, teléfono y correo.",
        "completed": false
      },
      {
        "id": "step-5",
        "text": "Derivar de inmediato al equipo regional para coordinar el recambio de la terminal.",
        "completed": false
      }
    ],
    "problemHtml": "<p>La terminal muestra una pantalla de bloqueo y no permite avanzar.</p>",
    "reasonHtml": "<p>Golpe fuerte o caida de la terminal.</p>",
    "solutionHtml": "<div style=\"background:#0f172a;color:#fff;padding:16px;border-radius:14px;margin-bottom:14px;\"><h3 style=\"color:#f97316;margin:0 0 6px 0;font-size:16px;font-weight:bold;\">Es un bloqueo permanente. La única salida es reemplazar el equipo.</h3><p style=\"margin:0;font-size:12px;color:#cbd5e1;\">Aplica para terminales que queden bloqueadas mostrando \"Modo seguro\" o \"Active Device\".</p></div><p><strong>¿Por qué pasa?</strong></p><p>Golpe fuerte, caída o posible manipulación física/electrónica detectada por los sensores criptográficos de seguridad de la terminal.</p><p><strong>¿Qué pedir al comercio obligatoriamente?</strong></p><ul><li><strong>Número de serie</strong> de la terminal afectada.</li><li><strong>Nombre del comercio</strong> e ID de Dash.</li><li><strong>Dirección exacta</strong> de retiro/entrega.</li><li><strong>Teléfono y correo</strong> de contacto directo.</li></ul><p><strong>Acción de soporte:</strong> Crear folio de recambio y derivar al equipo de Hardware/CS de Fudo Pagos del país correspondiente.</p>",
    "notesHtml": "",
    "clientResponse": {
      "text": "Lamentamos lo ocurrido con la terminal. El mensaje \"Modo seguro\" o \"Active Device\" corresponde a un bloqueo permanente de seguridad activado por los sensores internos del equipo (suele ocurrir tras una caída, golpe o sacudida fuerte).\n\n🔒 Al ser una protección criptográfica del hardware, no es posible desbloquearla de forma remota y corresponde realizar el recambio de la terminal.\n\n📌 Para coordinar el envío del reemplazo, por favor confirmanos:\n1️⃣ Número de serie de la terminal (figura detrás del equipo).\n2️⃣ Dirección exacta de entrega.\n3️⃣ Teléfono y correo de contacto.\n\n✅ Con estos datos iniciamos de inmediato la gestión de recambio.",
      "isHomologated": true
    },
    "externalLink": {
      "title": "Base de Conocimiento Fudo",
      "url": "https://soporte.fudo.la",
      "code": "FUDO-KB"
    }
  },
  {
    "id": "fudo-flow-037",
    "number": "37",
    "category": "Gestión Común",
    "readTime": "3 min",
    "title": "Arqueo de caja con Fudo Pagos",
    "description": "Flujo de arqueo de caja con Fudo Pagos: cómo se completa solo y qué revisar si hay diferencias.",
    "link": "fudo.la/soporte",
    "updatedStatus": "Nuevo",
    "code": "KB-GES-37",
    "subtitle": "Apertura de arqueo, autocompletado de ventas electrónicas y detección de diferencias.",
    "verificationSteps": [
      {
        "id": "step-1",
        "text": "1. Abrir: Ventas > Arqueo de caja > Nuevo arqueo. Definir fecha, hora y monto inicial.",
        "completed": false
      },
      {
        "id": "step-2",
        "text": "2. Se completa solo: El total de Fudo Pagos \"Según sistema\" se copia automáticamente en \"Según usuario\".",
        "completed": false
      },
      {
        "id": "step-3",
        "text": "3. Cerrar: Se cargan los otros medios de pago (efectivo, etc.) y se finaliza el arqueo.",
        "completed": false
      },
      {
        "id": "step-4",
        "text": "¿Diferencia en Fudo Pagos? Siempre deberían coincidir: verificar el monto en Fudo Pagos > Cobros.",
        "completed": false
      }
    ],
    "problemHtml": "<p>Cliente consulta por qué difiere el arqueo de caja o cómo verificar las ventas de Fudo Pagos al cerrar el turno.</p>",
    "reasonHtml": "<p>El sistema Fudo autocompleta \"Según Usuario\" con el valor de \"Según Sistema\" para agilizar el cuadre. Cualquier diferencia manual suele deberse a cobros ingresados bajo otro medio o cobros no registrados.</p>",
    "solutionHtml": "<ol><li><strong>1. Abrir:</strong> Ventas &rarr; Arqueo de caja &rarr; Nuevo arqueo. Definir fecha, hora y monto inicial.</li><li><strong>2. Se completa solo:</strong> El total registrado para Fudo Pagos <em>\"Según sistema\"</em> se copia automáticamente en <em>\"Según usuario\"</em>, agilizando el cuadre de caja de los pagos con tarjeta.</li><li><strong>3. Cerrar:</strong> Se cargan manualmente los otros medios de pago (efectivo, Mercado Pago, etc.) y se finaliza el arqueo.</li></ol><div style=\"background:#fffbeb;border:1px solid #fef3c7;padding:12px;border-radius:12px;margin-top:12px;\"><p style=\"color:#92400e;margin:0;\">⚠️ <strong>¿Diferencia en Fudo Pagos?</strong> Siempre deberían coincidir exactamente. Si hay discrepancia, verificar el monto en la pestaña <strong>Fudo Pagos &rarr; Cobros</strong> para revisar las transacciones aprobadas.</p></div>",
    "notesHtml": "<p>Recordar al cliente que la terminal POS no realiza un cierre de lote impreso tradicional: todo el detalle de ventas y cobros se gestiona y audita digitalmente desde Fudo Web.</p>",
    "clientResponse": {
      "text": "El arqueo de caja con Fudo Pagos está diseñado para cuadrar de forma automática:\n\n1️⃣ Abrir arqueo: ingresá a Ventas > Arqueo de caja > Nuevo arqueo e indicá fecha, hora y monto inicial.\n2️⃣ Se completa solo: el total cobrado por Fudo Pagos \"Según sistema\" se copia automáticamente en \"Según usuario\".\n3️⃣ Cerrar: completá los importes de los demás medios de pago (como efectivo) y finalizá el arqueo.\n\n⚠️ ¿Notás diferencias en Fudo Pagos? Siempre deberían coincidir. Podés corroborar el total real ingresando a Fudo Pagos > Cobros y filtrando por la fecha del turno.",
      "isHomologated": true
    },
    "externalLink": {
      "title": "Base de Conocimiento Fudo",
      "url": "https://soporte.fudo.la",
      "code": "FUDO-KB"
    }
  },
  {
    "id": "fudo-flow-038",
    "number": "38",
    "category": "Gestión Comercial",
    "readTime": "2 min",
    "title": "Cambio de Razón Social / RUT - CUIT - RFC",
    "description": "Procedimiento de derivación para clientes que necesitan cambiar la titularidad fiscal de su cuenta de Fudo Pagos.",
    "link": "fudo.la/soporte",
    "updatedStatus": "Nuevo",
    "code": "KB-COM-38",
    "subtitle": "Derivación interna por país ante modificación de persona física/jurídica o documento fiscal.",
    "verificationSteps": [
      {
        "id": "step-1",
        "text": "Confirmar país del comercio y recopilar datos del nuevo titular fiscal (RUT en CL, CUIT en AR, RFC en MX).",
        "completed": false
      },
      {
        "id": "step-2",
        "text": "Chile: derivar o crear folio a Ronald Perdomo / Macarena Morales.",
        "completed": false
      },
      {
        "id": "step-3",
        "text": "Argentina: derivar o crear folio a Karen Gonzalez / German Rios.",
        "completed": false
      },
      {
        "id": "step-4",
        "text": "México: derivar o crear folio a Clara Romero.",
        "completed": false
      }
    ],
    "problemHtml": "<p>Cliente solicita transferir la terminal o cambiar la razón social (RUT, CUIT o RFC) con la que opera en Fudo Pagos.</p>",
    "reasonHtml": "<p>Un cambio de razón social implica una nueva homologación fiscal y contractual ante el adquirente, por lo que no puede hacerse de forma manual por el cliente ni por soporte N1.</p>",
    "solutionHtml": "<p>El cambio de razón social no puede realizarse de forma directa desde la configuración del cliente. Se debe derivar o crear folio con los datos del comercio a:</p><ul><li><strong>Chile:</strong> Ronald Perdomo / Macarena Morales (Fudo Pagos Chile - CS)</li><li><strong>Argentina:</strong> Karen Gonzalez / German Rios (Fudo Pagos Argentina - CS)</li><li><strong>México:</strong> Clara Romero (Fudo Pagos México - CS)</li></ul>",
    "notesHtml": "<p>Aclarar al cliente que para procesar el cambio se le solicitará la documentación respaldatoria de la nueva persona física o jurídica.</p>",
    "clientResponse": {
      "text": "Para gestionar el cambio de razón social (RUT, CUIT o RFC) en tu servicio de Fudo Pagos, debemos canalizarlo con nuestro equipo especializado para actualizar la titularidad contractual y bancaria:\n\n📌 Por favor compartinos:\n1️⃣ Razón social y documento fiscal actual.\n2️⃣ Nueva razón social y nuevo RUT/CUIT/RFC.\n3️⃣ Teléfono y correo del nuevo titular.\n\n✅ Con estos datos generamos la solicitud formal para que el equipo encargado se contacte con vos y te indique los requisitos para completarlo.",
      "isHomologated": true
    },
    "externalLink": {
      "title": "Base de Conocimiento Fudo",
      "url": "https://soporte.fudo.la",
      "code": "FUDO-KB"
    }
  },
  {
    "id": "fudo-flow-039",
    "number": "39",
    "category": "Error Dispositivo",
    "readTime": "3 min",
    "title": "Escalamiento crítico de terminal y canal Slack #contact-fudopagos",
    "description": "Protocolo de descarte técnico final y plantilla obligatoria para escalar incidencias no resueltas a #contact-fudopagos.",
    "link": "fudo.la/soporte",
    "updatedStatus": "Nuevo",
    "code": "KB-ERR-39",
    "subtitle": "Última prueba general de batería, datos obligatorios del reporte y derivación en días hábiles.",
    "verificationSteps": [
      {
        "id": "step-1",
        "text": "Ejecutar última prueba general: apagar terminal, retirar batería 20 min, colocar tapa, encender y reintentar.",
        "completed": false
      },
      {
        "id": "step-2",
        "text": "Verificar si la app de Fudo está actualizada y alternar conectividad entre Wi-Fi y datos móviles (chip).",
        "completed": false
      },
      {
        "id": "step-3",
        "text": "Si no resuelve, redactar mensaje para Slack #contact-fudopagos con la plantilla obligatoria de 6 campos.",
        "completed": false
      }
    ],
    "problemHtml": "<p>Incidencia persistente de terminal (cobros, sistema, conectividad) que no se soluciona con los pasos de diagnóstico habituales.</p>",
    "reasonHtml": "<p>Falla profunda de firmware, hardware o conectividad que requiere intervención de Desarrollo, Pagos o soporte avanzado de Fudo Pagos.</p>",
    "solutionHtml": "<p><strong>1. Última prueba general obligatoria:</strong></p><p>Apagar &rarr; retirar batería &rarr; esperar <strong>20 minutos</strong> &rarr; colocar batería/tapa &rarr; encender &rarr; probar nuevamente.</p><p><strong>2. Si no se soluciona, derivar a Soporte Fudo Pagos mediante folio adjuntando:</strong></p><ul><li>Todo lo que ya se probó con el cliente.</li><li>Fotos y videos enviados por el comercio.</li><li>Datos de contacto completos del cliente.</li></ul><p><strong>3. Escalamiento en Slack (canal <code>#contact-fudopagos</code>):</strong></p><p>Para días hábiles donde soporte Fudo Pagos requiere asistencia de equipos de Desarrollo, Payments o Comercial, enviar mensaje con la siguiente plantilla <em>obligatoria</em>:</p><ul><li><strong>ID de Dash</strong> del comercio.</li><li><strong>Número de serie</strong> de la terminal.</li><li><strong>Fecha y hora exacta</strong> del incidente.</li><li><strong>Conectividad utilizada:</strong> WiFi o chip (especificar operador: Entel o Claro).</li><li><strong>Contexto del error:</strong> cuándo ocurre, si es aleatorio o sucede en mesas, mostrador o delivery.</li><li><strong>Evidencia:</strong> fotos o videos adjuntos del problema.</li></ul>",
    "notesHtml": "<p>Utilizar principalmente en días hábiles cuando soporte técnico N1 ya agotó pruebas de hardware y requiere escalamiento directo a los equipos regionales de producto o adquirente.</p>",
    "clientResponse": {
      "text": "",
      "isHomologated": false
    },
    "externalLink": {
      "title": "Base de Conocimiento Fudo",
      "url": "https://soporte.fudo.la",
      "code": "FUDO-KB"
    }
  },
  {
    "id": "fudo-flow-040",
    "number": "40",
    "category": "Error Dispositivo",
    "readTime": "3 min",
    "title": "Diagnóstico inicial de terminal (No enciende, No imprime, Errores)",
    "description": "Guía unificada de diagnóstico rápido para los 3 problemas técnicos más comunes antes de escalar.",
    "link": "fudo.la/soporte",
    "updatedStatus": "Nuevo",
    "code": "KB-ERR-40",
    "subtitle": "Pasos iniciales de descarte para encendido, impresión y errores de cobro/sistema.",
    "verificationSteps": [
      {
        "id": "step-1",
        "text": "No enciende: retirar batería 20 min > cargador original hasta 40% > si no carga, pedir video > si sigue, conectada más de 1 día.",
        "completed": false
      },
      {
        "id": "step-2",
        "text": "No imprime: verificar batería >10% > rollo con papel hacia adelante > calibrar (CL: PRINTER > Print Sample / AR-MX: HardwareTest > Printer Test).",
        "completed": false
      },
      {
        "id": "step-3",
        "text": "Errores o cobros: reiniciar terminal > verificar app en última versión > alternar WiFi y datos móviles > revisar permisos del usuario.",
        "completed": false
      },
      {
        "id": "step-4",
        "text": "ÚLTIMA PRUEBA GENERAL: Apagar > retirar batería > esperar 20 min > colocar batería y tapa > encender > probar.",
        "completed": false
      }
    ],
    "problemHtml": "<p>Comercio reporta fallo técnico en su terminal (no enciende, no imprime o da error de transacción/sistema).</p>",
    "reasonHtml": "<p>Bloqueo de energía, batería baja, configuración de contraste de cabezal o desincronización de red/sesión.</p>",
    "solutionHtml": "<p><strong>Matriz de Diagnóstico Inicial:</strong></p><ul><li><strong>1. No enciende:</strong><ul><li>Retirar batería <strong>20 min</strong>.</li><li>Cargador original hasta <strong>40% mínimo</strong>.</li><li>Si no carga: solicitar <strong>video de la conexión</strong>.</li><li>Si sigue: dejar conectada <strong>más de 1 día</strong>.</li></ul></li><li><strong>2. No imprime:</strong><ul><li>Batería <strong>mayor a 10%</strong>.</li><li>Rollo con el papel colocado <strong>hacia adelante</strong>.</li><li>Reiniciar o calibrar: 🇨🇱 CL: PRINTER &rarr; Print Sample / 🇦🇷🇲🇽 AR-MX: HardwareTest &rarr; Printer Test.</li></ul></li><li><strong>3. Errores o cobros:</strong><ul><li>Reiniciar la terminal.</li><li>Verificar que la app esté en la <strong>última versión</strong>.</li><li>Alternar entre <strong>WiFi y datos móviles (chip)</strong>.</li><li>Revisar permisos del usuario en Fudo.</li></ul></li></ul><div style=\"background:#0f172a;color:#fff;padding:14px;border-radius:12px;margin-top:14px;\"><p style=\"color:#38bdf8;font-weight:bold;margin:0 0 4px 0;\">ÚLTIMA PRUEBA GENERAL</p><p style=\"margin:0;font-size:13px;\">Apagar &rarr; retirar batería &rarr; esperar <strong>20 min</strong> &rarr; colocar batería y tapa &rarr; encender &rarr; probar.</p></div>",
    "notesHtml": "<p>Si ninguna de las pruebas iniciales ni la prueba general de 20 minutos resuelve el problema, proceder a la guía #39 (escalamiento completo con plantilla).</p>",
    "clientResponse": {
      "text": "Para diagnosticar y resolver el inconveniente con tu terminal, te sugerimos realizar estas pruebas rápidas:\n\n🔌 Si no enciende o no carga:\n1️⃣ Apagala y retirá la batería durante 20 minutos.\n2️⃣ Conectala con su cargador original y dejala cargar hasta al menos el 40% antes de encenderla.\n\n🖨️ Si no imprime:\n1️⃣ Verificá que la batería tenga más del 10% de carga.\n2️⃣ Corroborá que el rollo esté colocado con el papel saliendo hacia adelante.\n3️⃣ Reiniciá la terminal o ejecutá la prueba de impresión desde ajustes.\n\n💳 Si arroja error al cobrar:\n1️⃣ Reiniciá el equipo y verificá tener la app actualizada a la última versión.\n2️⃣ Probá alternando entre Wi-Fi y datos móviles (chip).\n\n🔄 Prueba general: apagá la terminal, retirá la batería 20 minutos, volvé a colocarla y probá nuevamente.\n\n✅ Si continúa la falla, avisanos para revisarlo juntos.",
      "isHomologated": true
    },
    "externalLink": {
      "title": "Base de Conocimiento Fudo",
      "url": "https://soporte.fudo.la",
      "code": "FUDO-KB"
    }
  }
];
