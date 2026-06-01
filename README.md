# PostIA 
 
**Panel de gestión y publicación automática de contenido en redes sociales con IA.**
 
PostIA es un sistema que automatiza de punta a punta la creación y publicación de contenido en Instagram y TikTok. Genera imágenes, videos y textos con IA, los deja en un panel para revisión y aprobación, y los publica automáticamente según un calendario — sin intervención manual.
 
---
 
##  Qué hace
 
- **Genera contenido con IA** — crea imágenes, videos y captions automáticamente
- **Panel de aprobación** — el cliente revisa y aprueba (o rechaza) cada publicación antes de que salga
- **Regeneración automática** — si un contenido se rechaza, el sistema genera uno nuevo solo
- **Publicación programada** — publica en Instagram y TikTok en la fecha y hora configuradas
- **Calendario editorial** — gestión visual de qué se publica y cuándo
---
 
##  Stack tecnológico
 
| Componente | Tecnología |
|------------|------------|
| Motor de automatización | **n8n** (self-hosted en Docker) |
| Generación de contenido | **IA generativa** (imágenes, video y texto) |
| Base de datos | **Supabase** (PostgreSQL) |
| Almacenamiento de medios | **Cloudinary** |
| Publicación en redes | **Instagram Graph API** · **TikTok Content Posting API** |
| Frontend del panel | **HTML / React** (vanilla, vía CDN) |
| Hosting del panel | **GitHub Pages** |
| Backend OAuth | **Netlify Functions** |
 
---
 
##  Arquitectura
 
El proyecto está dividido en tres repositorios:
 
### 1. PostIA — Panel de gestión (este repo)
El frontend donde el cliente revisa, aprueba o rechaza las publicaciones generadas. Incluye edición de captions, calendario editorial, vista previa a pantalla completa y notificaciones.
 
### 2. [PostIA Backend](https://github.com/Nicolas-Mesquiatti/postia-backend)
Funciones serverless (Netlify) que manejan el flujo OAuth 2.0 de TikTok: intercambian el código de autorización por tokens de acceso y los almacenan de forma segura en Supabase.
 
### 3. [EvoGym](https://github.com/Nicolas-Mesquiatti/EvoGym)
Sitio web del cliente de demostración — un gimnasio ficticio para el que se generó y publicó el contenido automatizado.
 
---
 
##  Cómo funciona el flujo
 
```
1. Trigger programado (fecha + hora del calendario)
        ↓
2. La IA genera la imagen/video y el caption
        ↓
3. Se sube el medio a Cloudinary y se guarda en Supabase como "pendiente"
        ↓
4. El cliente revisa en el panel → aprueba o rechaza
        ↓
   ├─ Rechazado → regenera contenido nuevo automáticamente
   └─ Aprobado → pasa a la cola de publicación
        ↓
5. Se publica automáticamente en Instagram / TikTok
```
 
---
 
##  Estado actual
 
- ✅ **Instagram** — publicación 100% funcional (imágenes y Reels)
- 🔄 **TikTok** — integración construida, en proceso de aprobación de la API de TikTok
- ✅ **Panel de aprobación** — funcional con edición de captions y calendario
- ✅ **Regeneración automática** — funcional
---
 
##  Demo
 
El video de demostración fue editado manualmente para mostrar el flujo real de generación, aprobación y publicación de punta a punta.


https://github.com/user-attachments/assets/ec6bfa97-5890-43d1-a073-3d42a608888a


 
---
 
##  Licencia
 
Proyecto desarrollado como solución de automatización para un cliente. Código de referencia.
 
---
 
*Desarrollado por [Nicolás Mesquiatti](https://github.com/Nicolas-Mesquiatti)*
 
