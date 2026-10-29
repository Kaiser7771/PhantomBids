🔮 PhantomBids - Plataforma de Subastas Inversas y Relicarios Malditos

Asignatura: Ingeniería Web (2026-2)

Entrega: Entrega 1 - Frontend React

Equipo: Equipo 8

Integrantes:

Carlos Ignacio Uribe Vásquez

Wildrey Alexis Alzate Berrio

Docente: Silvia Natalia Suarez Gomez

📌 Descripción del Proyecto

PhantomBids es una plataforma web inmersiva de subastas inversas y comercio de artefactos paranormales. La aplicación permite a los usuarios explorar recintos ocultos, pujar en tiempo real por objetos embrujados bajo un entorno de anonimato y gestionar un registro detallado de maldiciones, sanciones y rankings de reputación.

🚀 Tecnologías Utilizadas

Framework: React 19

Empaquetador & Server: Vite 8

Estilos: Tailwind CSS v4 (Tema personalizado modo oscuro base slate-950 con acentos purple, rose, amber y emerald)

Enrutamiento: React Router DOM v7 (Con soporte de rutas protegidas y navegación declarativa)

Iconografía: React Icons (react-icons/fi, react-icons/gi)

Gestión de Estado: Context API (AuthContext)

📁 Arquitectura del Proyecto

El proyecto sigue una estructura modular por dominios de negocio y separación de responsabilidades:

src/
├── main.jsx
├── App.jsx
├── App.css
├── context/
│   └── AuthContext.jsx          # Context API para gestión global de sesión y rol
├── routes/
│   ├── AppRoutes.jsx            # Enrutador principal de la aplicación
│   └── ProtectedRoute.jsx       # Control de acceso basado en roles (RBAC)
├── data/                        # Mocks centralizados de información
│   ├── houses.js
│   ├── objects.js
│   └── rankings.js
├── components/
│   ├── AlertBanner.jsx          # Alertas visuales y sanciones
│   ├── BettingWidget.jsx         # Widget de apuestas paralelas (3x)
│   ├── CountdownTimer.jsx       # Temporizador dinámico en tiempo real
│   ├── layout/
│   │   └── Navbar.jsx           # Barra de navegación principal y estado de sesión
│   └── ui/
│       └── Input.jsx            # Componente de entrada de datos reutilizable
└── pages/
    ├── AuthPage.jsx             # Formulario controlado de Login / Registro
    ├── HousePage.jsx            # Catálogo de recintos ocultos y salas VIP
    ├── ProfilePage.jsx          # Perfil de usuario y registro de pujas
    ├── CreateObjectPage.jsx     # Publicación de objetos con previsualización en tiempo real
    ├── AuctionDetail.jsx        # Detalle de subasta y consola de ofertas
    ├── CurseLog.jsx             # Registro de sanciones y efectos espectrales
    └── RankingsDashboard.jsx    # Tableros de clasificación de invocadores


✨ Características Principales

Subastas Inversas en Tiempo Real: Monitorización de pujas con alertas dinámicas cuando el temporizador entra en estado crítico (< 30s).

Control de Acceso Basado en Roles (RBAC): Restricción de rutas privadas (creación de artefactos y perfiles) conectadas a AuthContext.

Formularios Controlados y Previsualización: Registro interactivo de reliquias con cálculo dinámico del nivel de severidad y previsualización inmediata de la tarjeta.

Sistema de Apuestas Paralelas: Mecánica secundaria para apostar fichas de reputación contra otros participantes anónimos.

Interfaz Temática Inmersiva: Diseño moderno adaptado con un modo oscuro espectral utilizando Tailwind CSS v4.

🛠️ Instalación y Ejecución Local

Sigue estos pasos para ejecutar el proyecto localmente:

Clonar el repositorio:

git clone https://github.com/Kaiser7771/PhantomBids.git
cd PhantomBids


Instalar dependencias:

npm install


Iniciar el servidor de desarrollo:

npm run dev


Construir para producción (opcional):

npm run build


📄 Licencia y Entregables

Proyecto desarrollado con fines académicos para la asignatura de Ingeniería Web.