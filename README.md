# Periscope GO

Una extensión de Visual Studio Code que permite ver rápidamente la implementación de funciones en archivos Go.

## Características

- Ver la implementación de una función Go usando un atajo de teclado
- Soporte para interfaces y métodos
- Resaltado de sintaxis nativo de Go
- Compatible con el Go Language Server

## Requisitos

- Visual Studio Code 1.104.0 o superior
- Extensión Go para VS Code (`golang.go`)
- Go instalado en el sistema
- Go Language Server configurado correctamente

## Uso

Hay dos formas de usar la extensión:

### Usando Atajo de Teclado (Recomendado)
1. Coloca el cursor sobre el nombre de una función
2. Presiona `Shift + Barra Espaciadora`
3. La implementación se abrirá en una nueva pestaña

Para personalizar el atajo:
1. Abre la Paleta de Comandos (Ctrl+Shift+P o Cmd+Shift+P en macOS)
2. Escribe "Preferencias: Abrir Atajos de Teclado"
3. Busca "periscope-go.showImplementation"
4. Haz click en el lápiz y configura tu atajo preferido

### Usando el Menú Contextual
1. Click derecho sobre el nombre de una función
2. Selecciona "Ver Implementación de Función"

## Configuración

La extensión se activa automáticamente en archivos Go.

## Limitaciones

- Solo funciona con archivos Go
- Requiere que el Go Language Server esté correctamente configurado y funcionando
- La función debe estar definida en el workspace o en paquetes Go instalados

## Notas de la versión

### 1.0.0
- Versión inicial
- Soporte para ver implementaciones de funciones Go
- Atajo de teclado predeterminado: Shift + Barra Espaciadora
- Opción en el menú contextual
