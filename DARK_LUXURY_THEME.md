# Dark Luxury Theme - Design System

## 🎨 Paleta de Colores

### Colores Principales

```css
--color-dark-primary: #0a0a0f; /* Fondo principal oscuro */
--color-dark-secondary: rgba(15, 15, 20, 0.95); /* Fondo secundario */
--color-gold-primary: #c9a961; /* Oro/dorado principal */
--color-gold-secondary: rgba(201, 169, 97, 0.9); /* Oro variante */
```

### Colores de Texto

```css
--text-primary: rgba(255, 255, 255, 0.95); /* Texto principal */
--text-secondary: rgba(255, 255, 255, 0.75); /* Texto secundario */
--text-tertiary: rgba(255, 255, 255, 0.65); /* Texto terciario */
--text-muted: rgba(255, 255, 255, 0.5); /* Texto apagado */
--text-disabled: rgba(255, 255, 255, 0.4); /* Texto deshabilitado */
```

### Colores de Fondo para Tarjetas (Glassmorphism)

```css
--glass-primary: rgba(15, 15, 20, 0.6); /* Glassmorphism principal */
--glass-secondary: rgba(15, 15, 20, 0.5); /* Glassmorphism secundario */
--glass-tertiary: rgba(15, 15, 20, 0.4); /* Glassmorphism terciario */
--glass-light: rgba(255, 255, 255, 0.05); /* Glassmorphism claro */
```

### Colores de Bordes

```css
--border-subtle: rgba(255, 255, 255, 0.06); /* Borde muy sutil */
--border-light: rgba(255, 255, 255, 0.1); /* Borde ligero */
--border-medium: rgba(255, 255, 255, 0.15); /* Borde medio */
--border-gold: rgba(201, 169, 97, 0.8); /* Borde dorado */
```

### Colores de Acento (Orbs/Decorativos)

```css
--accent-gold-subtle: rgba(201, 169, 97, 0.06); /* Oro muy sutil */
--accent-gold-light: rgba(201, 169, 97, 0.1); /* Oro ligero */
--accent-gold-medium: rgba(201, 169, 97, 0.3); /* Oro medio */
```

## 🔤 Tipografía

### Fuentes

```css
/* Importar en el <head> o CSS */
@import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&display=swap");

--font-primary: "Cormorant Garamond", serif; /* Títulos y elementos elegantes */
--font-secondary: "Inter", sans-serif; /* Cuerpo de texto y UI */
```

### Jerarquía Tipográfica

#### Títulos (Cormorant Garamond)

```css
/* Hero Title / H1 */
font-family: var(--font-primary);
font-size: clamp(2.5rem, 6vw, 4.5rem);
font-weight: 300;
letter-spacing: 2px;
line-height: 1.2;
color: rgba(255, 255, 255, 0.95);

/* Section Title / H2 */
font-family: var(--font-primary);
font-size: clamp(2rem, 4vw, 3.5rem);
font-weight: 300;
letter-spacing: 1px;
line-height: 1.3;
color: rgba(255, 255, 255, 0.95);

/* Subsection Title / H3 */
font-family: var(--font-primary);
font-size: clamp(1.5rem, 3vw, 2.5rem);
font-weight: 400;
letter-spacing: 0.5px;
line-height: 1.4;
color: rgba(255, 255, 255, 0.95);

/* Card Title / H4 */
font-family: var(--font-primary);
font-size: clamp(1.25rem, 2vw, 1.75rem);
font-weight: 400;
letter-spacing: 0.5px;
line-height: 1.4;
color: rgba(255, 255, 255, 0.9);
```

#### Cuerpo de Texto (Inter)

```css
/* Body Large */
font-family: var(--font-secondary);
font-size: 1.15rem;
font-weight: 300;
letter-spacing: 0.3px;
line-height: 1.8;
color: rgba(255, 255, 255, 0.75);

/* Body Regular */
font-family: var(--font-secondary);
font-size: 1rem;
font-weight: 300;
letter-spacing: 0.3px;
line-height: 1.7;
color: rgba(255, 255, 255, 0.7);

/* Body Small */
font-family: var(--font-secondary);
font-size: 0.95rem;
font-weight: 300;
letter-spacing: 0.3px;
line-height: 1.6;
color: rgba(255, 255, 255, 0.65);

/* Caption */
font-family: var(--font-secondary);
font-size: 0.85rem;
font-weight: 300;
letter-spacing: 0.3px;
line-height: 1.5;
color: rgba(255, 255, 255, 0.6);
```

#### Labels y Tags

```css
/* Label Uppercase */
font-family: var(--font-secondary);
font-size: 0.85rem;
font-weight: 400;
letter-spacing: 2px;
text-transform: uppercase;
color: rgba(255, 255, 255, 0.8);

/* Tag */
font-family: var(--font-secondary);
font-size: 0.9rem;
font-weight: 400;
letter-spacing: 0.5px;
color: #c9a961;
```

## 🎭 Efectos y Animaciones

### Glassmorphism Effect

```css
.glass-card {
  background: rgba(15, 15, 20, 0.6);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.05);
}
```

### Hover Effects

#### Card Hover

```css
.card {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.card:hover {
  transform: translateY(-8px);
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(201, 169, 97, 0.5);
  border-color: rgba(201, 169, 97, 0.8);
}
```

#### Link Hover (Underline)

```css
.link {
  position: relative;
  color: rgba(255, 255, 255, 0.75);
  text-decoration: none;
  transition: color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.link::after {
  content: "";
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 1px;
  background: linear-gradient(90deg, #c9a961, transparent);
  transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.link:hover {
  color: #c9a961;
}

.link:hover::after {
  width: 100%;
}
```

#### Button Hover (Shimmer Effect)

```css
.button {
  position: relative;
  background: linear-gradient(135deg, #c9a961 0%, #b89551 100%);
  color: #0a0a0f;
  padding: 1rem 2.5rem;
  border: none;
  border-radius: 8px;
  font-family: var(--font-secondary);
  font-weight: 500;
  letter-spacing: 0.5px;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.button::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.3),
    transparent
  );
  transition: left 0.5s ease;
}

.button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(201, 169, 97, 0.4);
}

.button:hover::before {
  left: 100%;
}
```

### Keyframe Animations

#### Fade In Up

```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in-up {
  animation: fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}
```

#### Fade In Down

```css
@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in-down {
  animation: fadeInDown 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}
```

#### Float Animation

```css
@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.float {
  animation: float 3s ease-in-out infinite;
}
```

#### Pulse Animation

```css
@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(201, 169, 97, 0.4);
  }
  50% {
    transform: scale(1.02);
    box-shadow: 0 0 0 10px rgba(201, 169, 97, 0);
  }
}

.pulse {
  animation: pulse 2s ease-in-out infinite;
}
```

## 📐 Layout y Espaciado

### Spacing System

```css
--spacing-xs: 0.5rem; /* 8px */
--spacing-sm: 1rem; /* 16px */
--spacing-md: 2rem; /* 32px */
--spacing-lg: 3rem; /* 48px */
--spacing-xl: 4rem; /* 64px */
--spacing-2xl: 5rem; /* 80px */
--spacing-3xl: 6rem; /* 96px */
```

### Container

```css
.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
  width: 100%;
}
```

### Grid System

```css
/* 2 Columns */
.grid-2 {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-lg);
}

/* 3 Columns */
.grid-3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-lg);
}

/* 4 Columns */
.grid-4 {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--spacing-md);
}
```

### Border Radius

```css
--radius-sm: 8px;
--radius-md: 12px;
--radius-lg: 16px;
--radius-xl: 20px;
--radius-2xl: 24px;
--radius-full: 9999px;
```

## 🎨 Elementos Decorativos

### Línea Decorativa Superior

```css
.section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  max-width: 800px;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.1),
    transparent
  );
}
```

### Orbs Decorativos (Background)

```css
.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  pointer-events: none;
  z-index: 0;
}

.orb-1 {
  width: 400px;
  height: 400px;
  background: rgba(201, 169, 97, 0.06);
  top: 10%;
  left: -10%;
}

.orb-2 {
  width: 500px;
  height: 500px;
  background: rgba(201, 169, 97, 0.08);
  bottom: 20%;
  right: -15%;
}

.orb-3 {
  width: 350px;
  height: 350px;
  background: rgba(201, 169, 97, 0.1);
  top: 50%;
  right: 10%;
}
```

### Radial Gradient Decoration

```css
.radial-decoration {
  position: absolute;
  width: 100%;
  height: 100%;
  background: radial-gradient(
    circle at 50% 50%,
    rgba(201, 169, 97, 0.05) 0%,
    transparent 70%
  );
  pointer-events: none;
}
```

### Left Border Animation

```css
.card-with-border {
  position: relative;
  border-left: 2px solid transparent;
  transition: border-color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.card-with-border::before {
  content: "";
  position: absolute;
  left: -2px;
  top: 0;
  width: 2px;
  height: 0;
  background: linear-gradient(180deg, #c9a961, transparent);
  transition: height 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.card-with-border:hover::before {
  height: 100%;
}
```

## 📱 Responsive Breakpoints

```css
/* Desktop Large */
@media (max-width: 1400px) {
  /* Ajustes para pantallas grandes */
}

/* Desktop */
@media (max-width: 1200px) {
  /* Ajustes para desktop */
  .container {
    padding: 0 var(--spacing-md);
  }
}

/* Tablet */
@media (max-width: 768px) {
  /* Ajustes para tablet */
  .grid-2,
  .grid-3,
  .grid-4 {
    grid-template-columns: 1fr;
    gap: var(--spacing-md);
  }

  h1 {
    font-size: 2.5rem;
  }
  h2 {
    font-size: 2rem;
  }
  h3 {
    font-size: 1.5rem;
  }
}

/* Mobile */
@media (max-width: 480px) {
  /* Ajustes para mobile */
  .container {
    padding: 0 var(--spacing-sm);
  }

  h1 {
    font-size: 2rem;
  }
  h2 {
    font-size: 1.75rem;
  }
  h3 {
    font-size: 1.25rem;
  }
}
```

## 🎯 Componentes Comunes

### Navbar

```css
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: rgba(10, 10, 15, 0.95);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  padding: 1rem 2rem;
  z-index: 1000;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.navbar-link {
  font-family: var(--font-secondary);
  color: rgba(255, 255, 255, 0.75);
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 400;
  letter-spacing: 0.5px;
  transition: color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
}

.navbar-link::after {
  content: "";
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 1px;
  background: #c9a961;
  transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.navbar-link:hover {
  color: #c9a961;
}

.navbar-link:hover::after {
  width: 100%;
}
```

### Card Base

```css
.card {
  background: rgba(15, 15, 20, 0.6);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 2.5rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.05);
}

.card:hover {
  transform: translateY(-8px);
  border-color: rgba(201, 169, 97, 0.5);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(201, 169, 97, 0.3);
}
```

### Section Header

```css
.section-header {
  text-align: center;
  margin-bottom: var(--spacing-xl);
  position: relative;
}

.section-title {
  font-family: var(--font-primary);
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 300;
  letter-spacing: 1px;
  color: rgba(255, 255, 255, 0.95);
  margin-bottom: 1rem;
}

.section-subtitle {
  font-family: var(--font-secondary);
  font-size: 1.15rem;
  font-weight: 300;
  letter-spacing: 0.5px;
  color: rgba(255, 255, 255, 0.7);
  max-width: 700px;
  margin: 0 auto;
}
```

### Footer

```css
.footer {
  background: #0a0a0f;
  color: rgba(255, 255, 255, 0.95);
  padding: 5rem 2rem 2rem;
  position: relative;
}

.footer::before {
  content: "";
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  max-width: 800px;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.1),
    transparent
  );
}
```

## 💡 Tips de Uso

1. **Consistencia en Opacidades**: Usa las opacidades definidas para mantener jerarquía visual consistente
2. **Glassmorphism Sutil**: No abuses del blur, mantén valores entre 10px-20px
3. **Animaciones Suaves**: Usa `cubic-bezier(0.4, 0, 0.2, 1)` para transiciones naturales
4. **Oro con Moderación**: El color dorado debe ser acento, no protagonista
5. **Espaciado Generoso**: Los diseños luxury respiran mejor con espaciado amplio
6. **Typography Hierarchy**: Respeta los pesos ligeros (300) para títulos, da elegancia
7. **Bordes Sutiles**: Usa opacidades bajas (0.06-0.1) para bordes, evita líneas fuertes
8. **Background Gradients**: Prefiere gradientes radiales sutiles sobre lineales intensos
9. **Hover States**: Siempre incluye feedback visual suave en elementos interactivos
10. **Mobile First**: Asegúrate que el glassmorphism y efectos funcionen bien en móvil

## 🎨 Paleta Extendida (Opcional)

### Variantes de Contexto

```css
/* Success */
--color-success: rgba(76, 175, 80, 0.8);
--color-success-light: rgba(76, 175, 80, 0.1);

/* Warning */
--color-warning: rgba(255, 193, 7, 0.8);
--color-warning-light: rgba(255, 193, 7, 0.1);

/* Error */
--color-error: rgba(244, 67, 54, 0.8);
--color-error-light: rgba(244, 67, 54, 0.1);

/* Info */
--color-info: rgba(33, 150, 243, 0.8);
--color-info-light: rgba(33, 150, 243, 0.1);
```

---

**Creado para proyectos premium que requieren elegancia y sofisticación visual.**
