import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Basic translations for UI components
const resources = {
  en: {
    translation: {
      "common": {
        "change_dimension": "Change Dimension",
        "eye_comfort": "Eye Comfort",
        "theme_toggle": "Toggle Theme",
        "menu": "Menu",
        "execute": "Execute",
        "clear": "Clear",
        "loading": "Loading...",
        "play_again": "Play Again",
        "score": "Score: {{score}}/{{total}}",
        "back": "Back",
        "disable_eye_comfort": "Disable Eye Comfort",
        "enable_eye_comfort": "Enable Eye Comfort",
        "switch_power_mode": "Switch Power Mode",
        "restore_light": "Restore Light"
      },
      "age_selection": {
        "welcome": "WELCOME TO MATHOPY",
        "choose_dimension": "Choose your mathematical dimension",
        "kids": "Kid Mode",
        "kids_sub": "Magic & Crayon"
      },
      "landing": {
        "features": "Features",
        "how_works": "How it Works",
        "play_now": "Play Now!",
        "hero_title": "Math is <0>Magic!</0>",
        "hero_subtitle": "Step into a world where numbers come alive! Solve puzzles, build worlds, and create art with the power of Mathopy.",
        "start_magic": "Start Magic",
        "unlock_brain": "Unlock your brain!",
        "cool_superpowers": "Cool Superpowers",
        "superpowers_sub": "What can you do with Mathopy?",
        "how_to_play": "How to Play?",
        "step1_title": "Pick your Dimension",
        "step1_desc": "Choose Kid Mode for magic and beautiful crayon art.",
        "step2_title": "Ask Anything!",
        "step2_desc": "Type a problem, talk to the AI, or draw a shape on the screen.",
        "step3_title": "Create & Share",
        "step3_desc": "Watch magic drawings appear or solve hard puzzles with ease!",
        "ready_start": "Ready to Start?",
        "play_kids": "Play for Kids",
        "copyright": "Mathopy © 2026 — Made with magic crayons",
        "feat1_title": "Magic Solver",
        "feat1_desc": "Snap a photo or type a problem. Watch it get solved like magic!",
        "feat2_title": "Art Maker",
        "feat2_desc": "Turn your math formulas into beautiful, colorful masterpieces.",
        "feat3_title": "Fun Quizzes",
        "feat3_desc": "Test your brain with puzzles that feel like a video game.",
        "test1_name": "Teacher Sam",
        "test1_text": "Mathopy makes math feel like playtime! My students are obsessed.",
        "test2_name": "Leo, Age 8",
        "test2_text": "I used to hate math, but now I love making art with numbers!",
        "test3_name": "Dr. Jane",
        "test3_text": "The perfect balance between high-level analysis and playful learning."
      },
      "kids": {
        "backpack": "My Backpack",
        "quote": "\"Every child is an artist. The problem is how to remain an artist once we grow up.\""
      },
      "solver": {
        "header": "Magic Math Solver",
        "sub_text": "Watch the magic unfold as we solve your problems together!",
        "logical_deduction": "Magic Explanation",
        "processing": "Mixing colors and math...",
        "placeholder": "Type your mathematical problem here...",
        "analyzing": "Analyzing...",
        "input_label": "Type your problem. Watch the magic happen!"
      },
      "visualizer": {
        "header_kids": "Art Maker",
        "placeholder_kids": "Describe your magic drawing... like a curly rainbow spiral!",
        "btn_kids": "Make Magic Drawing!",
        "sidebar_kids": "Magic Shapes",
        "badge_kids": "Pure Math Magic!",
        "loading_kids": "Mixing colors and math...",
        "again_kids": "Draw Again!"
      },
      "practical": {
        "header_kids": "Playground Simulations",
        "title_kids": "See Math in Action!",
        "placeholder_kids": "What should we build today?",
        "btn_kids": "Launch!",
        "loading_kids": "Building your world...",
        "empty_kids": "Type something above to start!"
      },
      "practice": {
        "header_kids": "Fun Quiz Time!",
        "sub_kids": "Challenge Your Brain",
        "badge_kids": "Ready? Set? GO!",
        "input_label_kids": "What do we study today?",
        "placeholder_kids": "Math magic topic...",
        "difficulty_kids": "How hard should it be?",
        "btn_kids": "Start the Adventure!",
        "loading_kids": "Building magic paths...",
        "congrats_kids": "YAY! YOU DID IT!",
        "score_kids": "You got {{score}} out of {{total}} magic points!",
        "again_kids": "Play Again!"
      },
      "custom": {
        "header_kids": "My Lessons",
        "title_kids": "Create Your Quest",
        "input_label_kids": "What do you want to master?",
        "placeholder_kids": "e.g. I want to learn about magic shapes...",
        "past_kids": "Past Quests",
        "btn_kids": "Make My Quest!",
        "loading_btn_kids": "Consulting Magic Book...",
        "output_header_kids": "Quest Scroll",
        "output_sub_kids": "Thy Path",
        "loading_text_kids": "Drawing your roadmap...",
        "empty_kids": "Your Quest awaits!"
      },
      "library": {
        "header": "Magic Academy",
        "sub_text": "Explore the ancient scrolls of mathematical wisdom!",
        "placeholder": "What do you want to learn today? e.g., Fibonacci numbers...",
        "btn": "Discover",
        "loading": "Reading the ancient scrolls...",
        "magic_fact": "Magic Fact",
        "visualization": "Imagine This",
        "related": "Related Secrets",
        "cat_numbers": "numbers",
        "cat_shapes": "shapes",
        "cat_operations": "operations",
        "cat_patterns": "patterns",
        "cat_logic": "logic",
        "cat_numbers_label": "Number Magic",
        "cat_shapes_label": "Shape Secrets",
        "cat_operations_label": "Logic Spells",
        "cat_patterns_label": "Hidden Patterns",
        "cat_logic_label": "Brain Puzzles"
      },
      "daily": {
        "header": "Daily Bits",
        "preparing": "Gathering today's magic bits...",
        "fact_title": "Magic Fact",
        "challenge_title": "Quest of the Day",
        "answer_placeholder": "Your answer...",
        "btn_submit": "Claim Victory!",
        "solved_title": "Master of Magic!",
        "solved_sub": "You've mastered today's bit of wisdom.",
        "try_again": "Not quite there! Try a different spell.",
        "tip_title": "Sage's Advice",
        "tip_text": "Remember to always look for the shapes within the numbers. Every circle tells a story of infinity."
      },
      "nav": {
        "magic_solver": "Magic Solver",
        "fun_quiz": "Fun Quiz",
        "playground": "Playground",
        "art_maker": "Art Maker",
        "my_lessons": "My Lessons",
        "academy": "Academy",
        "daily_bits": "Daily Bits"
      },
      "footer": {
        "kids": "Hand-drawn with love by Mathopy AI"
      }
    }
  },
  es: {
    translation: {
      "common": {
        "change_dimension": "Cambiar Dimensión",
        "eye_comfort": "Comodidad Visual",
        "theme_toggle": "Cambiar Tema",
        "menu": "Menú",
        "execute": "Ejecutar",
        "clear": "Limpiar",
        "loading": "Cargando...",
        "play_again": "Jugar de Nuevo",
        "score": "Puntuación: {{score}}/{{total}}",
        "back": "Atrás",
        "disable_eye_comfort": "Desactivar Comodidad Visual",
        "enable_eye_comfort": "Activar Comodidad Visual",
        "switch_power_mode": "Cambiar Modo de Energía",
        "restore_light": "Restaurar Luz"
      },
      "age_selection": {
        "welcome": "BIENVENIDO A MATHOPY",
        "choose_dimension": "Elige tu dimensión matemática",
        "kids": "Modo Niños",
        "kids_sub": "Magia y Crayones"
      },
      "landing": {
        "features": "Características",
        "how_works": "Cómo funciona",
        "play_now": "¡Juega ahora!",
        "hero_title": "¡Las matemáticas son <0>magia!</0>",
        "hero_subtitle": "¡Entra en un mundo donde los números cobran vida! Resuelve acertijos, construye mundos y crea arte con el poder de Mathopy.",
        "start_magic": "Iniciar Magia",
        "unlock_brain": "¡Desbloquea tu cerebro!",
        "cool_superpowers": "Superpoderes Geniales",
        "superpowers_sub": "¿Qué puedes hacer con Mathopy?",
        "how_to_play": "¿Cómo jugar?",
        "step1_title": "Elige tu Dimensión",
        "step1_desc": "Elige el Modo Niños para magia y hermosas obras de arte con crayones.",
        "step2_title": "¡Pregunta lo que sea!",
        "step2_desc": "Escribe un problema, habla con la IA o dibuja una forma en la pantalla.",
        "step3_title": "Crea y Comparte",
        "step3_desc": "¡Mira cómo aparecen dibujos mágicos o resuelve acertijos difíciles con facilidad!",
        "ready_start": "¿Listo para empezar?",
        "play_kids": "Jugar para Niños",
        "copyright": "Mathopy © 2026 — Hecho con crayones mágicos",
        "feat1_title": "Solucionador Mágico",
        "feat1_desc": "Toma una foto o escribe un problema. ¡Mira cómo se resuelve como por arte de magia!",
        "feat2_title": "Creador de Arte",
        "feat2_desc": "Convierte tus fórmulas matemáticas en hermosas y coloridas obras maestras.",
        "feat3_title": "Quizzes Divertidos",
        "feat3_desc": "Pon a prueba tu cerebro con acertijos que parecen un videojuego.",
        "test1_name": "Maestro Sam",
        "test1_text": "¡Mathopy hace que las matemáticas parezcan tiempo de juego! Mis alumnos están obsesionados.",
        "test2_name": "Leo, 8 años",
        "test2_text": "¡Antes odiaba las matemáticas, pero ahora me encanta crear arte con números!",
        "test3_name": "Dra. Jane",
        "test3_text": "El equilibrio perfecto entre análisis de alto nivel y aprendizaje lúdico."
      },
      "kids": {
        "backpack": "Mi Mochila",
        "quote": "\"Cada niño es un artista. El problema es cómo seguir siendo un artista una vez que crecemos.\""
      },
      "solver": {
        "header": "Solucionador Matemático Mágico",
        "sub_text": "¡Mira cómo se desarrolla la magia mientras resolvemos tus problemas juntos!",
        "logical_deduction": "Explicación Mágica",
        "processing": "Mezclando colores y matemáticas...",
        "placeholder": "Escribe tu problema matemático aquí...",
        "analyzing": "Analizando...",
        "input_label": "Escribe tu problema. ¡Mira cómo ocurre la magia!"
      },
      "visualizer": {
        "header_kids": "Creador de Arte",
        "placeholder_kids": "Describe tu dibujo mágico... ¡como una espiral de arcoíris rizada!",
        "btn_kids": "¡Hacer Dibujo Mágico!",
        "sidebar_kids": "Formas Mágicas",
        "badge_kids": "¡Pura Magia Matemática!",
        "loading_kids": "Mezclando colores y matemáticas...",
        "again_kids": "¡Dibujar de nuevo!"
      },
      "practical": {
        "header_kids": "Simulaciones de Patio",
        "title_kids": "¡Mira las Matemáticas en Acción!",
        "placeholder_kids": "¿Qué deberíamos construir hoy?",
        "btn_kids": "¡Lanzar!",
        "loading_kids": "Construyendo tu mundo...",
        "empty_kids": "¡Escribe algo arriba para empezar!"
      },
      "practice": {
        "header_kids": "¡Tiempo de Quiz Divertido!",
        "sub_kids": "Desafía tu Cerebro",
        "badge_kids": "¡Listo? ¿Preparado? ¡FUERA!",
        "input_label_kids": "¿Qué estudiamos hoy?",
        "placeholder_kids": "Tema de magia matemática...",
        "difficulty_kids": "¿Qué tan difícil debería ser?",
        "btn_kids": "¡Empieza la Aventura!",
        "loading_kids": "Construyendo caminos mágicos...",
        "congrats_kids": "¡YAY! ¡LO LOGRASTE!",
        "score_kids": "¡Obtuviste {{score}} de {{total}} puntos mágicos!",
        "again_kids": "¡Jugar de Nuevo!"
      },
      "custom": {
        "header_kids": "Mis Lecciones",
        "title_kids": "Crea tu Misión",
        "input_label_kids": "¿Qué quieres dominar?",
        "placeholder_kids": "ej. Quiero aprender sobre formas mágicas...",
        "past_kids": "Misiones Passadas",
        "btn_kids": "¡Crear mi Misión!",
        "loading_btn_kids": "Consultando el Libro Mágico...",
        "output_header_kids": "Pergamino de Misión",
        "output_sub_kids": "Tu Camino",
        "loading_text_kids": "Dibujando tu hoja de ruta...",
        "empty_kids": "¡Tu Misión te espera!"
      },
      "library": {
        "header": "Academia Mágica",
        "sub_text": "¡Explora los antiguos pergaminos de la sabiduría matemática!",
        "placeholder": "¿Qué quieres aprender hoy? ej. números de Fibonacci...",
        "btn": "Descubrir",
        "loading": "Leyendo los antiguos pergaminos...",
        "magic_fact": "Dato Mágico",
        "visualization": "Imagina Esto",
        "related": "Secretos Relacionados",
        "cat_numbers": "números",
        "cat_shapes": "formas",
        "cat_operations": "operaciones",
        "cat_patterns": "patrones",
        "cat_logic": "lógica",
        "cat_numbers_label": "Magia de Números",
        "cat_shapes_label": "Secretos de Formas",
        "cat_operations_label": "Hechizos Lógicos",
        "cat_patterns_label": "Patrones Ocultos",
        "cat_logic_label": "Acertijos Cerebrales"
      },
      "daily": {
        "header": "Bits Diarios",
        "preparing": "Reuniendo los bits mágicos de hoy...",
        "fact_title": "Dato Mágico",
        "challenge_title": "Misión del Día",
        "answer_placeholder": "Tu respuesta...",
        "btn_submit": "¡Reclamar Victoria!",
        "solved_title": "¡Maestro de la Magia!",
        "solved_sub": "Has dominado el bit de sabiduría de hoy.",
        "try_again": "¡Casi! Prueba con un hechizo diferente.",
        "tip_title": "Consejo del Sabio",
        "tip_text": "Recuerda mirar siempre las formas dentro de los números. Cada círculo cuenta una historia de infinito."
      },
      "nav": {
        "magic_solver": "Solucionador Mágico",
        "fun_quiz": "Quiz Divertido",
        "playground": "Campo de Juego",
        "art_maker": "Creador de Arte",
        "my_lessons": "Mis Lecciones",
        "academy": "Academia",
        "daily_bits": "Bits Diarios"
      },
      "footer": {
        "kids": "Dibujado a mano con amor por Mathopy AI"
      }
    }
  },
  fr: {
    translation: {
      "common": {
        "change_dimension": "Changer de Dimension",
        "eye_comfort": "Confort Visuel",
        "theme_toggle": "Changer de Thème",
        "menu": "Menu",
        "execute": "Exécuter",
        "clear": "Effacer",
        "loading": "Chargement...",
        "play_again": "Rejouer",
        "score": "Score: {{score}}/{{total}}",
        "back": "Retour",
        "disable_eye_comfort": "Désactiver le Confort Visuel",
        "enable_eye_comfort": "Activer le Confort Visuel",
        "switch_power_mode": "Changer de Mode d'Énergie",
        "restore_light": "Restaurer la Lumière"
      },
      "age_selection": {
        "welcome": "BIENVENUE SUR MATHOPY",
        "choose_dimension": "Choisissez votre dimension mathématique",
        "kids": "Mode Enfants",
        "kids_sub": "Magie & Craie"
      },
      "landing": {
        "features": "Fonctionnalités",
        "how_works": "Comment ça marche",
        "play_now": "Jouez maintenant !",
        "hero_title": "Les maths, c'est de la <0>magie !</0>",
        "hero_subtitle": "Entrez dans un monde où les nombres prennent vie ! Résolvez des énigmes, construisez des mondes et créez de l'art avec la puissance de Mathopy.",
        "start_magic": "Commencer la Magie",
        "unlock_brain": "Débloquez votre cerveau !",
        "cool_superpowers": "Super-pouvoirs Cool",
        "superpowers_sub": "Que pouvez-vous faire avec Mathopy ?",
        "how_to_play": "Comment jouer ?",
        "step1_title": "Choisissez votre Dimension",
        "step1_desc": "Choisissez le Mode Enfants pour la magie et de superbes dessins à la craie.",
        "step2_title": "Demandez tout !",
        "step2_desc": "Tapez un problème, parlez à l'IA ou dessinez une forme sur l'écran.",
        "step3_title": "Créez & Partagez",
        "step3_desc": "Regardez des dessins magiques apparaître ou résolvez des énigmes difficiles avec facilité !",
        "ready_start": "Prêt à commencer ?",
        "play_kids": "Jouer pour Enfants",
        "copyright": "Mathopy © 2026 — Fait avec des craies magiques",
        "feat1_title": "Solveur Magique",
        "feat1_desc": "Prenez une photo ou tapez un problème. Regardez-le se résoudre comme par magie !",
        "feat2_title": "Créateur d'Art",
        "feat2_desc": "Transformez vos formules mathématiques en chefs-d'œuvre magnifiques et colorés.",
        "feat3_title": "Quiz Amusants",
        "feat3_desc": "Testez votre cerveau avec des puzzles qui ressemblent à un jeu vidéo.",
        "test1_name": "Professeur Sam",
        "test1_text": "Mathopy fait paraître les maths comme une récréation ! Mes élèves sont obsédés.",
        "test2_name": "Léo, 8 ans",
        "test2_text": "Avant je détestais les maths, mais maintenant j'adore faire de l'art avec les nombres !",
        "test3_name": "Dr Jane",
        "test3_text": "L'équilibre parfait entre l'analyse de haut niveau et l'apprentissage ludique."
      },
      "kids": {
        "backpack": "Mon Sac à Dos",
        "quote": "\"Chaque enfant est un artiste. Le problème est de rester un artiste une fois adulte.\""
      },
      "solver": {
        "header": "Solveur Mathématique Magique",
        "sub_text": "Regardez la magie opérer pendant que nous résolvons vos problèmes ensemble !",
        "logical_deduction": "Explication Magique",
        "processing": "Mélange des couleurs et des maths...",
        "placeholder": "Tapez votre problème mathématique ici...",
        "analyzing": "Analyse en cours...",
        "input_label": "Tapez votre problème. Regardez la magie opérer !"
      },
      "visualizer": {
        "header_kids": "Créateur d'Art",
        "placeholder_kids": "Décrivez votre dessin magique... comme une spirale arc-en-ciel bouclée !",
        "btn_kids": "Faire un Dessin Magique !",
        "sidebar_kids": "Formes Magiques",
        "badge_kids": "Pure Magie Mathématique !",
        "loading_kids": "Mélange des couleurs et des maths...",
        "again_kids": "Dessiner à nouveau !"
      },
      "practical": {
        "header_kids": "Simulations de Terrain de Jeu",
        "title_kids": "Voyez les Maths en Action !",
        "placeholder_kids": "Que devrions-nous construire aujourd'hui ?",
        "btn_kids": "Lancer !",
        "loading_kids": "Construction de votre monde...",
        "empty_kids": "Tapez quelque chose au-dessus pour commencer !"
      },
      "practice": {
        "header_kids": "C'est l'heure du Quiz Amusant !",
        "sub_kids": "Défiez votre Cerveau",
        "badge_kids": "Prêt ? Feu ? PARTEZ !",
        "input_label_kids": "Qu'étudions-nous aujourd'hui ?",
        "placeholder_kids": "Sujet de magie mathématique...",
        "difficulty_kids": "Quelle doit être la difficulté ?",
        "btn_kids": "Commencez l'aventure !",
        "loading_kids": "Construction de chemins magiques...",
        "congrats_kids": "OUAH ! VOUS L'AVEZ FAIT !",
        "score_kids": "Vous avez obtenu {{score}} points magiques sur {{total}} !",
        "again_kids": "Rejouer !"
      },
      "custom": {
        "header_kids": "Mes Leçons",
        "title_kids": "Créez votre Quête",
        "input_label_kids": "Que voulez-vous maîtriser ?",
        "placeholder_kids": "ex: Je veux en savoir plus sur les formes magiques...",
        "past_kids": "Quêtes Passées",
        "btn_kids": "Créer ma Quête !",
        "loading_btn_kids": "Consultation du Livre Magique...",
        "output_header_kids": "Parchemin de Quête",
        "output_sub_kids": "Ton Chemin",
        "loading_text_kids": "Dessin de votre feuille de route...",
        "empty_kids": "Votre Quête vous attend !"
      },
      "nav": {
        "magic_solver": "Solveur Magique",
        "fun_quiz": "Quiz Amusant",
        "playground": "Terrain de Jeu",
        "art_maker": "Créateur d'Art",
        "my_lessons": "Mes Leçons",
        "academy": "Académie",
        "daily_bits": "Bits Quotidiens"
      },
      "footer": {
        "kids": "Dessiné à la main avec amour par Mathopy AI"
      }
    }
  },
  de: {
    translation: {
      "common": {
        "change_dimension": "Dimension ändern",
        "eye_comfort": "Augenkomfort",
        "theme_toggle": "Thema wechseln",
        "menu": "Menü",
        "execute": "Ausführen",
        "clear": "Löschen",
        "loading": "Laden...",
        "play_again": "Nochmal spielen",
        "score": "Ergebnis: {{score}}/{{total}}",
        "back": "Zurück",
        "disable_eye_comfort": "Augenkomfort deaktivieren",
        "enable_eye_comfort": "Augenkomfort aktivieren",
        "switch_power_mode": "Energiemodus wechseln",
        "restore_light": "Licht wiederherstellen"
      },
      "age_selection": {
        "welcome": "WILLKOMMEN BEI MATHOPY",
        "choose_dimension": "Wählen Sie Ihre mathematische Dimension",
        "kids": "Kindermodus",
        "kids_sub": "Magie & Buntstift"
      },
      "landing": {
        "features": "Funktionen",
        "how_works": "Wie es funktioniert",
        "play_now": "Jetzt spielen!",
        "hero_title": "Mathe ist <0>Magie!</0>",
        "hero_subtitle": "Treten Sie ein in eine Welt, in der Zahlen lebendig werden! Lösen Sie Rätsel, bauen Sie Welten und erschaffen Sie Kunst mit der Kraft von Mathopy.",
        "start_magic": "Magie starten",
        "unlock_brain": "Aktiviere dein Gehirn!",
        "cool_superpowers": "Coole Superkräfte",
        "superpowers_sub": "Was kannst du mit Mathopy machen?",
        "how_to_play": "Wie wird gespielt?",
        "step1_title": "Wähle deine Dimension",
        "step1_desc": "Wähle den Kindermodus für Magie und wunderschöne Buntstiftkunst.",
        "step2_title": "Frag alles!",
        "step2_desc": "Gib ein Problem ein, sprich mit der KI oder zeichne eine Form auf den Bildschirm.",
        "step3_title": "Erstellen & Teilen",
        "step3_desc": "Sieh zu, wie magische Zeichnungen erscheinen oder löse schwere Rätsel mit Leichtigkeit!",
        "ready_start": "Bereit zum Starten?",
        "play_kids": "Für Kinder spielen",
        "copyright": "Mathopy © 2026 — Mit magischen Buntstiften gemacht",
        "feat1_title": "Magischer Löser",
        "feat1_desc": "Mach ein Foto oder gib ein Problem ein. Sieh zu, wie es wie von Zauberhand gelöst wird!",
        "feat2_title": "Kunstschöpfer",
        "feat2_desc": "Verwandle deine Matheformeln in wunderschöne, farbenfrohe Meisterwerke.",
        "feat3_title": "Lustige Quizze",
        "feat3_desc": "Teste dein Gehirn mit Rätseln, die sich wie ein Videospiel anfühlen.",
        "test1_name": "Lehrer Sam",
        "test1_text": "Mathopy lässt Mathe wie Spielzeit wirken! Meine Schüler sind besessen.",
        "test2_name": "Leo, 8 Jahre",
        "test2_text": "Früher habe ich Mathe gehasst, aber jetzt liebe ich es, Kunst mit Zahlen zu machen!",
        "test3_name": "Dr. Jane",
        "test3_text": "Die perfekte Balance zwischen anspruchsvoller Analyse und spielerischem Lernen."
      },
      "kids": {
        "backpack": "Mein Rucksack",
        "quote": "\"Jedes Kind ist ein Künstler. Das Problem ist, wie man ein Künstler bleibt, wenn man erwachsen wird.\""
      },
      "solver": {
        "header": "Magischer Mathe-Löser",
        "sub_text": "Sieh zu, wie sich die Magie entfaltet, während wir deine Probleme gemeinsam lösen!",
        "logical_deduction": "Magische Erklärung",
        "processing": "Farben und Mathe mischen...",
        "placeholder": "Gib hier dein Matheproblem ein...",
        "analyzing": "Analysiere...",
        "input_label": "Gib dein Problem ein. Sieh zu, wie die Magie geschieht!"
      },
      "visualizer": {
        "header_kids": "Kunstschöpfer",
        "placeholder_kids": "Beschreibe deine magische Zeichnung... wie eine lockige Regenbogenspirale!",
        "btn_kids": "Magische Zeichnung machen!",
        "sidebar_kids": "Magische Formen",
        "badge_kids": "Reine Mathe-Magie!",
        "loading_kids": "Farben und Mathe mischen...",
        "again_kids": "Nochmal zeichnen!"
      },
      "practical": {
        "header_kids": "Spielplatz-Simulationen",
        "title_kids": "Mathe in Aktion sehen!",
        "placeholder_kids": "Was sollen wir heute bauen?",
        "btn_kids": "Starten!",
        "loading_kids": "Deine Welt wird gebaut...",
        "empty_kids": "Gib oben etwas ein, um zu starten!"
      },
      "practice": {
        "header_kids": "Lustige Quizzeit!",
        "sub_kids": "Fordere dein Gehirn heraus",
        "badge_kids": "Fertig? Los! GEHT LOS!",
        "input_label_kids": "Was lernen wir heute?",
        "placeholder_kids": "Mathe-Magie-Thema...",
        "difficulty_kids": "Wie schwer soll es sein?",
        "btn_kids": "Abenteuer starten!",
        "loading_kids": "Magische Pfade werden gebaut...",
        "congrats_kids": "YAY! DU HAST ES GESCHAFFT!",
        "score_kids": "Du hast {{score}} von {{total}} magischen Punkten erreicht!",
        "again_kids": "Nochmal spielen!"
      },
      "custom": {
        "header_kids": "Meine Lektionen",
        "title_kids": "Erstelle deine Suche",
        "input_label_kids": "Was möchtest du meistern?",
        "placeholder_kids": "z.B. Ich möchte etwas über magische Formen lernen...",
        "past_kids": "Vergangene Suchen",
        "btn_kids": "Meine Suche erstellen!",
        "loading_btn_kids": "Zauberbuch wird konsultiert...",
        "output_header_kids": "Such-Schriftrolle",
        "output_sub_kids": "Dein Pfad",
        "loading_text_kids": "Dein Fahrplan wird gezeichnet...",
        "empty_kids": "Deine Suche wartet!"
      },
      "nav": {
        "magic_solver": "Magischer Löser",
        "fun_quiz": "Lustiges Quiz",
        "playground": "Spielplatz",
        "art_maker": "Kunstschöpfer",
        "my_lessons": "Meine Lektionen",
        "academy": "Akademie",
        "daily_bits": "Tägliche Bits"
      },
      "footer": {
        "kids": "Mit Liebe handgezeichnet von Mathopy AI"
      }
    }
  },
  it: {
    translation: {
      "common": {
        "change_dimension": "Cambia Dimensione",
        "eye_comfort": "Comfort Visivo",
        "theme_toggle": "Cambia Tema",
        "menu": "Menu",
        "execute": "Esegui",
        "clear": "Pulisci",
        "loading": "Caricamento...",
        "play_again": "Gioca ancora",
        "score": "Punteggio: {{score}}/{{total}}",
        "back": "Indietro",
        "disable_eye_comfort": "Disattiva Comfort Visivo",
        "enable_eye_comfort": "Attiva Comfort Visivo",
        "switch_power_mode": "Cambia Modalità Energia",
        "restore_light": "Ripristina Luce"
      },
      "age_selection": {
        "welcome": "BENVENUTO SU MATHOPY",
        "choose_dimension": "Scegli la tua dimensione matematica",
        "kids": "Modalità Bambini",
        "kids_sub": "Magia e Pastelli"
      },
      "landing": {
        "features": "Caratteristiche",
        "how_works": "Come funziona",
        "play_now": "Gioca ora!",
        "hero_title": "La matematica è <0>Magia!</0>",
        "hero_subtitle": "Entra in un mondo dove i numeri prendono vita! Risolvi enigmi, costruisci mondi e crea arte con il potere di Mathopy.",
        "start_magic": "Inizia la Magia",
        "unlock_brain": "Sblocca il tuo cervello!",
        "ready_start": "Pronto per iniziare?",
        "play_kids": "Gioca per Bambini",
        "copyright": "Mathopy © 2026 — Fatto con pastelli magici"
      },
      "kids": {
        "backpack": "Il mio Zaino",
        "quote": "\"Ogni bambino è un artista. Il problema è come rimanere un artista una volta cresciuti.\""
      },
      "solver": {
        "header": "Risolutore Matematico Magico",
        "sub_text": "Guarda la magia scorrere mentre risolviamo i tuoi problemi insieme!",
        "logical_deduction": "Spiegazione Magica",
        "processing": "Mescolando colori e matematica..."
      },
      "nav": {
        "magic_solver": "Risolutore Magico",
        "fun_quiz": "Quiz Divertente",
        "playground": "Parco Giochi",
        "art_maker": "Creatore d'Arte",
        "my_lessons": "Le mie Lezioni"
      }
    }
  },
  pt: {
    translation: {
      "common": {
        "change_dimension": "Mudar Dimensão",
        "eye_comfort": "Conforto Visual",
        "theme_toggle": "Alternar Tema",
        "menu": "Menu",
        "execute": "Executar",
        "clear": "Limpar",
        "loading": "Carregando...",
        "play_again": "Jogar novamente",
        "score": "Pontuação: {{score}}/{{total}}",
        "back": "Voltar",
        "disable_eye_comfort": "Desativar Conforto Visual",
        "enable_eye_comfort": "Ativar Conforto Visual",
        "switch_power_mode": "Mudar Modo de Energia"
      },
      "age_selection": {
        "welcome": "BEM-VINDO AO MATHOPY",
        "choose_dimension": "Escolha sua dimensão matemática",
        "kids": "Modo Crianças",
        "kids_sub": "Magia e Giz"
      },
      "landing": {
        "features": "Funcionalidades",
        "how_works": "Como funciona",
        "play_now": "Jogue agora!",
        "hero_title": "Matemática é <0>Magia!</0>",
        "hero_subtitle": "Entre em um mundo onde os números ganham vida! Resolva quebra-cabeças, construa mundos e crie arte com o poder do Mathopy.",
        "start_magic": "Iniciar Magia",
        "unlock_brain": "Desbloqueie seu cérebro!",
        "ready_start": "Pronto para começar?",
        "play_kids": "Jogar para Crianças",
        "copyright": "Mathopy © 2026 — Feito com giz mágico"
      },
      "kids": {
        "backpack": "Minha Mochila",
        "quote": "\"Toda criança é um artista. O problema é como continuar sendo um artista depois que crescemos.\""
      },
      "solver": {
        "header": "Solucionador Matemático Mágico",
        "sub_text": "Veja a magia acontecer enquanto resolvemos seus problemas juntos!",
        "logical_deduction": "Explicação Mágica",
        "processing": "Misturando cores e matemática..."
      },
      "nav": {
        "magic_solver": "Solucionador Mágico",
        "fun_quiz": "Quiz Divertido",
        "playground": "Parquinho",
        "art_maker": "Criador de Arte",
        "my_lessons": "Minhas Lições"
      }
    }
  },
  ja: {
    translation: {
      "common": {
        "change_dimension": "次元を変更",
        "eye_comfort": "目に優しいモード",
        "theme_toggle": "テーマ切り替え",
        "menu": "メニュー",
        "execute": "実行",
        "clear": "クリア",
        "loading": "読み込み中...",
        "play_again": "もう一度遊ぶ",
        "score": "スコア: {{score}}/{{total}}",
        "back": "戻る"
      },
      "age_selection": {
        "welcome": "マソピーへようこそ",
        "choose_dimension": "数学の次元を選択してください",
        "kids": "キッズモード",
        "kids_sub": "魔法とクレヨン"
      },
      "landing": {
        "features": "特徴",
        "how_works": "使い方",
        "play_now": "今すぐ遊ぶ！",
        "hero_title": "数学は<0>魔法！</0>",
        "hero_subtitle": "数字が動き出す世界へ！パズルを解き、世界を作り、マソピーの力でアートを生み出そう。",
        "start_magic": "魔法を始める",
        "unlock_brain": "脳を解き放とう！",
        "ready_start": "準備はいい？",
        "play_kids": "子供向けに遊ぶ",
        "copyright": "マソピー © 2026 — 魔法のクレヨンで作られました"
      },
      "kids": {
        "backpack": "ぼくのリュック",
        "quote": "「すべての子供はアーティストだ。問題は、大人になってもアーティストであり続ける方法だ。」"
      },
      "solver": {
        "header": "魔法の数学ソルバー",
        "sub_text": "一緒に問題を解きながら、魔法が展開するのを見てみよう！",
        "logical_deduction": "魔法の解説",
        "processing": "色と数学を混ぜています..."
      },
      "nav": {
        "magic_solver": "魔法のソルバー",
        "fun_quiz": "楽しいクイズ",
        "playground": "遊び場",
        "art_maker": "アートメーカー",
        "my_lessons": "ぼくのレッスン"
      }
    }
  },
  'zh-CN': {
    translation: {
      "common": {
        "change_dimension": "更改维度",
        "eye_comfort": "护眼模式",
        "theme_toggle": "切换主题",
        "menu": "菜单",
        "execute": "执行",
        "clear": "清除",
        "loading": "加载中...",
        "play_again": "再玩一次",
        "score": "得分: {{score}}/{{total}}",
        "back": "返回"
      },
      "age_selection": {
        "welcome": "欢迎来到 MATHOPY",
        "choose_dimension": "选择你的数学维度",
        "kids": "儿童模式",
        "kids_sub": "魔法与蜡笔"
      },
      "landing": {
        "features": "功能",
        "how_works": "工作原理",
        "play_now": "立即开始！",
        "hero_title": "数学就是<0>魔法！</0>",
        "hero_subtitle": "步入数字焕发生机的世界！通过 Mathopy 的力量解决谜题、构建世界并创作艺术。",
        "start_magic": "开始魔法",
        "unlock_brain": "开启你的大脑！",
        "ready_start": "准备好了吗？",
        "play_kids": "开始儿童游玩",
        "copyright": "Mathopy © 2026 — 用魔法蜡笔制作"
      },
      "kids": {
        "backpack": "我的书包",
        "quote": "“每个孩子都是艺术家。问题在于长大后如何保持这种艺术气息。”"
      },
      "solver": {
        "header": "魔法数学求解器",
        "sub_text": "看我们一起解决问题时魔法如何展开！",
        "logical_deduction": "魔法讲解",
        "processing": "正在混合颜色和数学..."
      },
      "nav": {
        "magic_solver": "魔法求解器",
        "fun_quiz": "趣味测验",
        "playground": "游乐场",
        "art_maker": "艺术创作",
        "my_lessons": "我的课程"
      }
    }
  },
  ru: {
    translation: {
      "common": {
        "change_dimension": "Сменить измерение",
        "eye_comfort": "Комфорт для глаз",
        "theme_toggle": "Сменить тему",
        "menu": "Меню",
        "execute": "Выполнить",
        "clear": "Очистить",
        "loading": "Загрузка...",
        "play_again": "Играть снова",
        "score": "Счет: {{score}}/{{total}}",
        "back": "Назад",
        "disable_eye_comfort": "Выключить комфорт для глаз",
        "enable_eye_comfort": "Включить комфорт для глаз",
        "switch_power_mode": "Переключить режим питания",
        "restore_light": "Восстановить свет"
      },
      "age_selection": {
        "welcome": "ДОБРО ПОЖАЛОВАТЬ В MATHOPY",
        "choose_dimension": "Выберите свое математическое измерение",
        "kids": "Детский режим",
        "kids_sub": "Магия и мелки"
      },
      "landing": {
        "features": "Особенности",
        "how_works": "Как это работает",
        "play_now": "Играть сейчас!",
        "hero_title": "Математика — это <0>магия!</0>",
        "hero_subtitle": "Шагните в мир, где числа оживают! Решайте головоломки, стройте миры и творите искусство с помощью Mathopy.",
        "start_magic": "Начать магию",
        "unlock_brain": "Разблокируй свой мозг!",
        "cool_superpowers": "Крутые суперспособности",
        "superpowers_sub": "Что можно делать в Mathopy?",
        "how_to_play": "Как играть?",
        "step1_title": "Выбери измерение",
        "step1_desc": "Выбери Детский режим для магии и красивых рисунков мелками.",
        "step2_title": "Спрашивай обо всем!",
        "step2_desc": "Введи задачу, поговори с ИИ или нарисуй фигуру на экране.",
        "step3_title": "Твори и делись",
        "step3_desc": "Смотри, как появляются магические рисунки, или легко решай сложные задачи!",
        "ready_start": "Готовы начать?",
        "play_kids": "Играть для детей",
        "copyright": "Mathopy © 2026 — Сделано магическими мелками",
        "feat1_title": "Магический решатель",
        "feat1_desc": "Сфотографируй или введи задачу. Смотри, как она решается магически!",
        "feat2_title": "Мастер искусства",
        "feat2_desc": "Превращай математические формулы в красивые красочные шедевры.",
        "feat3_title": "Веселые викторины",
        "feat3_desc": "Тренируй мозг с помощью головоломок, которые ощущаются как видеоигра.",
        "test1_name": "Учитель Сэм",
        "test1_text": "Mathopy превращает математику в игру! Мои ученики в восторге.",
        "test2_name": "Лео, 8 лет",
        "test2_text": "Раньше я ненавидел математику, но теперь обожаю творить с числами!",
        "test3_name": "Доктор Джейн",
        "test3_text": "Идеальный баланс между глубоким анализом и игровым обучением."
      },
      "kids": {
        "backpack": "Мой рюкзак",
        "quote": "«Каждый ребенок — художник. Проблема в том, как остаться художником, когда мы вырастем»."
      },
      "solver": {
        "header": "Магический математический решатель",
        "sub_text": "Наблюдай за магией, пока мы вместе решаем задачи!",
        "logical_deduction": "Магическое объяснение",
        "processing": "Смешиваем цвета и математику...",
        "placeholder": "Введи свою математическую задачу здесь...",
        "analyzing": "Анализ...",
        "input_label": "Введи задачу. Смотри, как происходит магия!"
      },
      "visualizer": {
        "header_kids": "Мастер искусства",
        "placeholder_kids": "Опиши свой магический рисунок... например, радужную спираль!",
        "btn_kids": "Создать магический рисунок!",
        "sidebar_kids": "Магические фигуры",
        "badge_kids": "Чистая математическая магия!",
        "loading_kids": "Смешиваем цвета и математику...",
        "again_kids": "Рисовать снова!"
      },
      "practical": {
        "header_kids": "Симуляции на площадке",
        "title_kids": "Увидь математику в действии!",
        "placeholder_kids": "Что построим сегодня?",
        "btn_kids": "Запуск!",
        "loading_kids": "Строим твой мир...",
        "empty_kids": "Введи что-нибудь выше, чтобы начать!"
      },
      "practice": {
        "header_kids": "Время веселой викторины!",
        "sub_kids": "Брось вызов своему мозгу",
        "badge_kids": "Готовы? Внимание! МАРШ!",
        "input_label_kids": "Что изучаем сегодня?",
        "placeholder_kids": "Тема магической математики...",
        "difficulty_kids": "Насколько сложно должно быть?",
        "btn_kids": "Начать приключение!",
        "loading_kids": "Строим магические пути...",
        "congrats_kids": "УРА! ТЫ СДЕЛАЛ ЭТО!",
        "score_kids": "Ты набрал {{score}} из {{total}} магических очков!",
        "again_kids": "Играть снова!"
      },
      "custom": {
        "header_kids": "Мои уроки",
        "title_kids": "Создай свой квест",
        "input_label_kids": "Что ты хочешь освоить?",
        "placeholder_kids": "напр.: Хочу узнать о магических фигурах...",
        "past_kids": "Прошлые квесты",
        "btn_kids": "Создать мой квест!",
        "loading_btn_kids": "Листаем магическую книгу...",
        "output_header_kids": "Свиток квеста",
        "output_sub_kids": "Твой путь",
        "loading_text_kids": "Рисуем твою дорожную карту...",
        "empty_kids": "Твой квест ждет!"
      },
      "nav": {
        "magic_solver": "Магический решатель",
        "fun_quiz": "Веселая викторина",
        "playground": "Площадка",
        "art_maker": "Мастер искусства",
        "my_lessons": "Мои уроки"
      },
      "footer": {
        "kids": "Нарисовано вручную с любовью от Mathopy AI"
      }
    }
  },
  ko: {
    translation: {
      "common": {
        "change_dimension": "차원 변경",
        "eye_comfort": "시력 보호 모드",
        "theme_toggle": "테마 전환",
        "menu": "메뉴",
        "execute": "실행",
        "clear": "지우기",
        "loading": "로딩 중...",
        "play_again": "다시 하기",
        "score": "점수: {{score}}/{{total}}",
        "back": "뒤로",
        "disable_eye_comfort": "시력 보호 비활성화",
        "enable_eye_comfort": "시력 보호 활성화",
        "switch_power_mode": "전원 모드 전환",
        "restore_light": "조명 복구"
      },
      "age_selection": {
        "welcome": "MATHOPY에 오신 것을 환영합니다",
        "choose_dimension": "당신의 수학적 차원을 선택하세요",
        "kids": "키즈 모드",
        "kids_sub": "마법과 크레용"
      },
      "landing": {
        "features": "기능",
        "how_works": "사용 방법",
        "play_now": "지금 플레이!",
        "hero_title": "수학은 <0>마법입니다!</0>",
        "hero_subtitle": "숫자가 살아 움직이는 세계로 들어오세요! Mathopy의 힘으로 퍼즐을 풀고, 세상을 만들고, 예술을 창조하세요.",
        "start_magic": "마법 시작",
        "unlock_brain": "두뇌를 깨우세요!",
        "cool_superpowers": "멋진 초능력",
        "superpowers_sub": "Mathopy로 무엇을 할 수 있나요?",
        "how_to_play": "게임 방법",
        "step1_title": "차원 선택",
        "step1_desc": "마법과 아름다운 크레용 아트를 위해 키즈 모드를 선택하세요.",
        "step2_title": "무엇이든 물어보세요!",
        "step2_desc": "문제를 입력하거나 AI와 대화하거나 화면에 도형을 그리세요.",
        "step3_title": "창작 및 공유",
        "step3_desc": "마법 같은 그림이 나타나는 것을 지켜보거나 어려운 퍼즐을 쉽게 풀어보세요!",
        "ready_start": "시작할 준비가 되셨나요?",
        "play_kids": "어린이를 위한 플레이",
        "copyright": "Mathopy © 2026 — 마법 크레용으로 제작됨",
        "feat1_title": "마법 해결사",
        "feat1_desc": "사진을 찍거나 문제를 입력하세요. 마법처럼 해결되는 과정을 지켜보세요!",
        "feat2_title": "아트 메이커",
        "feat2_desc": "수학 공식을 아름답고 다채로운 걸작으로 바꿔보세요.",
        "feat3_title": "재미있는 퀴즈",
        "feat3_desc": "비디오 게임처럼 느껴지는 퍼즐로 두뇌를 테스트하세요.",
        "test1_name": "샘 선생님",
        "test1_text": "Mathopy 덕분에 수학이 놀이처럼 느껴져요! 학생들이 정말 좋아합니다.",
        "test2_name": "레오, 8세",
        "test2_text": "예전에는 수학을 싫어했는데, 이제는 숫자로 예술을 만드는 게 정말 즐거워요!",
        "test3_name": "제인 박사",
        "test3_text": "수준 높은 분석과 놀이 학습 사이의 완벽한 조화입니다."
      },
      "kids": {
        "backpack": "내 배낭",
        "quote": "“모든 아이는 예술가다. 문제는 어떻게 어른이 되어서도 예술가로 남느냐이다.”"
      },
      "solver": {
        "header": "마법 수학 해결사",
        "sub_text": "함께 문제를 풀면서 펼쳐지는 마법을 지켜보세요!",
        "logical_deduction": "마법 설명",
        "processing": "색상과 수학을 섞는 중...",
        "placeholder": "여기에 수학 문제를 입력하세요...",
        "analyzing": "분석 중...",
        "input_label": "문제를 입력하세요. 마법이 일어나는 것을 지켜보세요!"
      },
      "visualizer": {
        "header_kids": "아트 메이커",
        "placeholder_kids": "마법 같은 그림을 설명해 보세요... 무지개 소용돌이처럼요!",
        "btn_kids": "마법 그림 그리기!",
        "sidebar_kids": "마법 도형",
        "badge_kids": "순수한 수학 마법!",
        "loading_kids": "색상과 수학을 섞는 중...",
        "again_kids": "다시 그리기!"
      },
      "practical": {
        "header_kids": "운동장 시뮬레이션",
        "title_kids": "동작하는 수학을 확인하세요!",
        "placeholder_kids": "오늘은 무엇을 만들어 볼까요?",
        "btn_kids": "시작!",
        "loading_kids": "당신의 세계를 만드는 중...",
        "empty_kids": "위에 내용을 입력하여 시작하세요!"
      },
      "practice": {
        "header_kids": "즐거운 퀴즈 시간!",
        "sub_kids": "두뇌에 도전하세요",
        "badge_kids": "준비? 시작! 가자!",
        "input_label_kids": "오늘은 무엇을 공부할까요?",
        "placeholder_kids": "수학 마법 주제...",
        "difficulty_kids": "난이도는 어떻게 할까요?",
        "btn_kids": "모험 시작!",
        "loading_kids": "마법의 길을 만드는 중...",
        "congrats_kids": "와우! 해냈어요!",
        "score_kids": "마법 점수 {{score}}/{{total}}점을 얻었습니다!",
        "again_kids": "다시 하기!"
      },
      "custom": {
        "header_kids": "내 레슨",
        "title_kids": "나만의 퀘스트 만들기",
        "input_label_kids": "무엇을 마스터하고 싶나요?",
        "placeholder_kids": "예: 마법 도형에 대해 배우고 싶어요...",
        "past_kids": "지난 퀘스트",
        "btn_kids": "퀘스트 만들기!",
        "loading_btn_kids": "마법책 확인 중...",
        "output_header_kids": "퀘스트 두루마리",
        "output_sub_kids": "당신의 길",
        "loading_text_kids": "로드맵 그리는 중...",
        "empty_kids": "당신의 퀘스트가 기다리고 있습니다!"
      },
      "nav": {
        "magic_solver": "마법 해결사",
        "fun_quiz": "재미있는 퀴즈",
        "playground": "운동장",
        "art_maker": "아트 메이커",
        "my_lessons": "내 레슨"
      },
      "footer": {
        "kids": "Mathopy AI가 사랑을 담아 직접 그렸습니다"
      }
    }
  },
  ar: {
    translation: {
      "common": {
        "change_dimension": "تغيير البعد",
        "eye_comfort": "راحة العين",
        "theme_toggle": "تبديل المظهر",
        "menu": "القائمة",
        "execute": "تنفيذ",
        "clear": "مسح",
        "loading": "جاري التحميل...",
        "play_again": "اللعب مرة أخرى",
        "score": "النتيجة: {{score}}/{{total}}",
        "back": "رجوع",
        "disable_eye_comfort": "تعطيل راحة العين",
        "enable_eye_comfort": "تفعيل راحة العين",
        "switch_power_mode": "تبديل وضع الطاقة",
        "restore_light": "استعادة الضوء"
      },
      "age_selection": {
        "welcome": "مرحباً بكم في MATHOPY",
        "choose_dimension": "اختر بعدك الرياضي",
        "kids": "وضع الأطفال",
        "kids_sub": "سحر وألوان"
      },
      "landing": {
        "features": "المميزات",
        "how_works": "كيف يعمل",
        "play_now": "إلعب الآن!",
        "hero_title": "الرياضيات هي <0>سحر!</0>",
        "hero_subtitle": "ادخل إلى عالم تنبض فيه الأرقام بالحياة! حل الألغاز، ابنِ عوالم، وابدع فنوناً بقوة Mathopy.",
        "start_magic": "ابدأ السحر",
        "unlock_brain": "أطلق العنان لعقلك!",
        "cool_superpowers": "قوى خارقة رائعة",
        "superpowers_sub": "ماذا يمكنك أن تفعل مع Mathopy؟",
        "how_to_play": "كيف تلعب؟",
        "step1_title": "اختر بعدك",
        "step1_desc": "اختر وضع الأطفال للسحر وفنون الألوان الجميلة.",
        "step2_title": "اسأل عن أي شيء!",
        "step2_desc": "اكتب مسألة، تحدث إلى الذكاء الاصطناعي، أو ارسم شكلاً على الشاشة.",
        "step3_title": "ابدع وشارك",
        "step3_desc": "شاهد الرسومات السحرية تظهر أو حل الألغاز الصعبة بسهولة!",
        "ready_start": "هل أنت جاهز للبدء؟",
        "play_kids": "لعب للأطفال",
        "copyright": "Mathopy © 2026 — صنع بألوان سحرية",
        "feat1_title": "الحلال السحري",
        "feat1_desc": "التقط صورة أو اكتب مسألة. شاهدها كيف تُحل كالسحر!",
        "feat2_title": "صانع الفن",
        "feat2_desc": "حول معادلاتك الرياضية إلى روائع فنية جميلة وملونة.",
        "feat3_title": "اختبارات ممتعة",
        "feat3_desc": "اختبر عقلك بألغاز تشعر وكأنها لعبة فيديو.",
        "test1_name": "المعلم سام",
        "test1_text": "Mathopy يجعل الرياضيات تبدو كأنها وقت لعب! طلابي مهووسون به.",
        "test2_name": "ليو، 8 سنوات",
        "test2_text": "كنت أكره الرياضيات، لكن الآن أحب صنع الفن بالأرقام!",
        "test3_name": "د. جين",
        "test3_text": "التوازن المثالي بين التحليل عالي المستوى والتعلم الممتع."
      },
      "kids": {
        "backpack": "حقيبتي",
        "quote": "\"كل طفل فنان. المشكلة هي كيف تظل فناناً عندما تكبر.\""
      },
      "solver": {
        "header": "حلال الرياضيات السحري",
        "sub_text": "شاهد السحر ينكشف بينما نحل مشاكلك معاً!",
        "logical_deduction": "شرح سحري",
        "processing": "مزج الألوان والرياضيات...",
        "placeholder": "اكتب مسألتك الرياضية هنا...",
        "analyzing": "جاري التحليل...",
        "input_label": "اكتب مسألتك. شاهد السحر يحدث!"
      },
      "visualizer": {
        "header_kids": "صانع الفن",
        "placeholder_kids": "صف رسمتك السحرية... مثل حلزون قوس قزح مجعد!",
        "btn_kids": "اصنع رسمة سحرية!",
        "sidebar_kids": "أشكال سحرية",
        "badge_kids": "سحر رياضيات خالص!",
        "loading_kids": "مزج الألوان والرياضيات...",
        "again_kids": "ارسم مرة أخرى!"
      },
      "practical": {
        "header_kids": "محاكاة الملعب",
        "title_kids": "شاهد الرياضيات في الواقع!",
        "placeholder_kids": "ماذا يجب أن نبني اليوم؟",
        "btn_kids": "انطلق!",
        "loading_kids": "بناء عالمك...",
        "empty_kids": "اكتب شيئاً أعلاه للبدء!"
      },
      "practice": {
        "header_kids": "وقت الاختبار الممتع!",
        "sub_kids": "تحدَّ عقلك",
        "badge_kids": "جاهز؟ استعد؟ انطلق!",
        "input_label_kids": "ماذا ندرس اليوم؟",
        "placeholder_kids": "موضوع سحر الرياضيات...",
        "difficulty_kids": "ما مدى الصعوبة المطلوبة؟",
        "btn_kids": "ابدأ المغامرة!",
        "loading_kids": "بناء مسارات سحرية...",
        "congrats_kids": "ياي! لقد فعلتها!",
        "score_kids": "لقد حصلت على {{score}} من {{total}} نقاط سحرية!",
        "again_kids": "اللعب مرة أخرى!"
      },
      "custom": {
        "header_kids": "دروسي",
        "title_kids": "ابدأ مهمتك",
        "input_label_kids": "ماذا تريد أن تتقن؟",
        "placeholder_kids": "مثلاً: أريد أن أتعلم عن الأشكال السحرية...",
        "past_kids": "المهمات السابقة",
        "btn_kids": "اصنع مهمتي!",
        "loading_btn_kids": "استشارة كتاب السحر...",
        "output_header_kids": "لفافة المهمة",
        "output_sub_kids": "مسارك",
        "loading_text_kids": "رسم خارطة الطريق الخاصة بك...",
        "empty_kids": "مهمتك تنتظرك!"
      },
      "nav": {
        "magic_solver": "الحلال السحري",
        "fun_quiz": "اختبار ممتع",
        "playground": "الملعب",
        "art_maker": "صانع الفن",
        "my_lessons": "دروسي"
      },
      "footer": {
        "kids": "رسم يدوي بحب من قبل Mathopy AI"
      }
    }
  },
  hi: {
    translation: {
      "common": {
        "change_dimension": "आयाम बदलें",
        "eye_comfort": "आंखों का आराम",
        "theme_toggle": "थीम बदलें",
        "menu": "मेनू",
        "execute": "निष्पादित करें",
        "clear": "साफ़ करें",
        "loading": "लोड हो रहा है...",
        "play_again": "फिर से खेलें",
        "score": "स्कोर: {{score}}/{{total}}",
        "back": "पीछे",
        "disable_eye_comfort": "आंखों का आराम अक्षम करें",
        "enable_eye_comfort": "आंखों का आराम सक्षम करें",
        "switch_power_mode": "पावर मोड स्विच करें",
        "restore_light": "रोशनी बहाल करें"
      },
      "age_selection": {
        "welcome": "MATHOPY में आपका स्वागत है",
        "choose_dimension": "अपना गणितीय आयाम चुनें",
        "kids": "किड्स मोड",
        "kids_sub": "जादू और क्रेयॉन"
      },
      "landing": {
        "features": "विशेषताएं",
        "how_works": "यह कैसे काम करता है",
        "play_now": "अभी खेलें!",
        "hero_title": "गणित <0>जादू</0> है!",
        "hero_subtitle": "ऐसी दुनिया में कदम रखें जहां संख्याएं जीवंत हो उठती हैं! मठोपी की शक्ति से पहेलियां सुलझाएं, दुनिया बनाएं और कला का सृजन करें।",
        "start_magic": "जादू शुरू करें",
        "unlock_brain": "अपने दिमाग को अनलॉक करें!",
        "cool_superpowers": "शानदार महाशक्तियां",
        "superpowers_sub": "आप मठोपी के साथ क्या कर सकते हैं?",
        "how_to_play": "कैसे खेलें?",
        "step1_title": "अपना आयाम चुनें",
        "step1_desc": "जादू और सुंदर क्रेयॉन कला के लिए किड्स मोड चुनें।",
        "step2_title": "कुछ भी पूछें!",
        "step2_desc": "एक समस्या टाइप करें, एआई से बात करें, या स्क्रीन पर एक आकार बनाएं।",
        "step3_title": "बनाएं और साझा करें",
        "step3_desc": "जादुई चित्र उभरते हुए देखें या कठिन पहेलियों को आसानी से सुलझाएं!",
        "ready_start": "शुरू करने के लिए तैयार हैं?",
        "play_kids": "बच्चों के लिए खेलें",
        "copyright": "मठोपी © 2026 — जादुई क्रेयॉन से निर्मित",
        "feat1_title": "मैजिक सॉल्वर",
        "feat1_desc": "एक फोटो लें या समस्या टाइप करें। इसे जादू की तरह सुलझते हुए देखें!",
        "feat2_title": "आर्ट मेकर",
        "feat2_desc": "अपने गणित के सूत्रों को सुंदर, रंगीन कृतियों में बदलें।",
        "feat3_title": "मजेदार क्विज़",
        "feat3_desc": "ऐसी पहेलियों के साथ अपने दिमाग का परीक्षण करें जो एक वीडियो गेम की तरह लगती हैं।",
        "test1_name": "शिक्षक सैम",
        "test1_text": "मठोपी गणित को खेल जैसा बना देता है! मेरे छात्र इसके दीवाने हैं।",
        "test2_name": "लियो, 8 वर्ष",
        "test2_text": "मुझे पहले गणित से नफरत थी, पर अब मुझे संख्याओं के साथ कला बनाना अच्छा लगता है!",
        "test3_name": "डॉ. जेन",
        "test3_text": "उच्च-स्तरीय विश्लेषण और चंचल सीखने के बीच सही संतुलन।"
      },
      "kids": {
        "backpack": "मेरा बैकपैक",
        "quote": "\"हर बच्चा एक कलाकार है। समस्या यह है कि बड़े होने के बाद भी कलाकार कैसे बने रहें।\""
      },
      "solver": {
        "header": "जादुई गणित सॉल्वर",
        "sub_text": "जब हम मिलकर आपकी समस्याओं को सुलझाते हैं तो जादू को सामने आते देखें!",
        "logical_deduction": "जादुई स्पष्टीकरण",
        "processing": "रंगों और गणित को मिलाया जा रहा है...",
        "placeholder": "अपनी गणितीय समस्या यहाँ टाइप करें...",
        "analyzing": "विश्लेषण किया जा रहा है...",
        "input_label": "अपनी समस्या टाइप करें। जादू होते देखें!"
      },
      "visualizer": {
        "header_kids": "आर्ट मेकर",
        "placeholder_kids": "अपनी जादुई ड्राइंग का वर्णन करें... जैसे घुंघराले इंद्रधनुषी सर्पिल!",
        "btn_kids": "जादुई ड्राइंग बनाएं!",
        "sidebar_kids": "जादुई आकार",
        "badge_kids": "शुद्ध गणित जादू!",
        "loading_kids": "रंगों और गणित को मिलाया जा रहा है...",
        "again_kids": "फिर से बनाएं!"
      },
      "practical": {
        "header_kids": "खेल का मैदान सिमुलेशन",
        "title_kids": "गणित को क्रिया में देखें!",
        "placeholder_kids": "हमें आज क्या बनाना चाहिए?",
        "btn_kids": "लॉन्च करें!",
        "loading_kids": "आपकी दुनिया बनाई जा रही है...",
        "empty_kids": "शुरू करने के लिए ऊपर कुछ टाइप करें!"
      },
      "practice": {
        "header_kids": "मजेदार क्विज़ का समय!",
        "sub_kids": "अपने दिमाग को चुनौती दें",
        "badge_kids": "तैयार? सेट? जाओ!",
        "input_label_kids": "हम आज क्या पढ़ते हैं?",
        "placeholder_kids": "गणित जादू विषय...",
        "difficulty_kids": "यह कितना कठिन होना चाहिए?",
        "btn_kids": "रोमांच शुरू करें!",
        "loading_kids": "जादुई रास्ते बनाए जा रहे हैं...",
        "congrats_kids": "वाह! आपने कर दिखाया!",
        "score_kids": "आपको {{total}} में से {{score}} जादुई अंक मिले!",
        "again_kids": "फिर से खेलें!"
      },
      "custom": {
        "header_kids": "मेरे पाठ",
        "title_kids": "अपनी खोज बनाएं",
        "input_label_kids": "आप किसमें महारत हासिल करना चाहते हैं?",
        "placeholder_kids": "जैसे: मैं जादुई आकृतियों के बारे में सीखना चाहता हूँ...",
        "past_kids": "पुरानी खोजें",
        "btn_kids": "मेरी खोज बनाएं!",
        "loading_btn_kids": "जादू की किताब से सलाह ली जा रही है...",
        "output_header_kids": "खोज स्क्रॉल",
        "output_sub_kids": "आपका मार्ग",
        "loading_text_kids": "आपका रोडमैप बनाया जा रहा है...",
        "empty_kids": "आपकी खोज प्रतीक्षा कर रही है!"
      },
      "nav": {
        "magic_solver": "जादुई सॉल्वर",
        "fun_quiz": "मजेदार क्विज़",
        "playground": "खेल का मैदान",
        "art_maker": "आर्ट मेकर",
        "my_lessons": "मेरे पाठ"
      },
      "footer": {
        "kids": "मठोपी एआई द्वारा प्यार से हाथ से बनाया गया"
      }
    }
  },
  'zh-TW': {
    translation: {
      "common": {
        "change_dimension": "更改維度",
        "eye_comfort": "護眼模式",
        "theme_toggle": "切換主題",
        "menu": "菜單",
        "execute": "執行",
        "clear": "清除",
        "loading": "加載中...",
        "play_again": "再玩一次",
        "score": "得分: {{score}}/{{total}}",
        "back": "返回",
        "disable_eye_comfort": "關閉護眼模式",
        "enable_eye_comfort": "開啟護眼模式",
        "switch_power_mode": "切換電源模式",
        "restore_light": "恢復光亮"
      },
      "age_selection": {
        "welcome": "歡迎來到 MATHOPY",
        "choose_dimension": "選擇你的數學維度",
        "kids": "兒童模式",
        "kids_sub": "魔法與蠟筆"
      },
      "landing": {
        "features": "功能",
        "how_works": "工作原理",
        "play_now": "立即開始！",
        "hero_title": "數學就是<0>魔法！</0>",
        "hero_subtitle": "步入數字煥發生機的世界！通過 Mathopy 的力量解決謎題、構建世界並創作藝術。",
        "start_magic": "開始魔法",
        "unlock_brain": "開啟你的大腦！",
        "cool_superpowers": "酷炫超能力",
        "superpowers_sub": "你可以用 Mathopy 做什麼？",
        "how_to_play": "如何遊玩？",
        "step1_title": "選擇你的維度",
        "step1_desc": "選擇兒童模式體驗魔法和美麗的蠟筆藝術。",
        "step2_title": "詢問任何問題！",
        "step2_desc": "輸入問題、與 AI 交談，或在螢幕上繪製圖形。",
        "step3_title": "創作與分享",
        "step3_desc": "觀看魔法繪圖出現，或輕鬆解決難題！",
        "ready_start": "準備好了嗎？",
        "play_kids": "開始兒童遊玩",
        "copyright": "Mathopy © 2026 — 用魔法蠟筆製作",
        "feat1_title": "魔法求解器",
        "feat1_desc": "拍照或輸入問題。看它像變魔術一樣被解決！",
        "feat2_title": "藝術創作",
        "feat2_desc": "將你的數學公式變成美麗、豐富多彩的傑作。",
        "feat3_title": "趣味測驗",
        "feat3_desc": "用感覺像電子遊戲的謎題來測試你的大腦。",
        "test1_name": "山姆老師",
        "test1_text": "Mathopy 讓數學感覺像遊戲時間！我的學生們都著迷了。",
        "test2_name": "里歐，8歲",
        "test2_text": "我以前討厭數學，但現在我喜歡用數字創作藝術！",
        "test3_name": "珍博士",
        "test3_text": "高水平分析與遊戲學習之間的完美平衡。"
      },
      "kids": {
        "backpack": "我的書包",
        "quote": "「每個孩子都是藝術家。問題在於長大後如何保持這種藝術氣息。」"
      },
      "solver": {
        "header": "魔法數學求解器",
        "sub_text": "看我們一起解決問題時魔法如何展開！",
        "logical_deduction": "魔法講解",
        "processing": "正在混合顏色和數學...",
        "placeholder": "在此輸入你的數學問題...",
        "analyzing": "正在分析...",
        "input_label": "輸入你的問題。看魔法發生！"
      },
      "visualizer": {
        "header_kids": "藝術創作",
        "placeholder_kids": "描述你的魔法繪圖... 比如一個螺旋彩虹！",
        "btn_kids": "製作魔法繪圖！",
        "sidebar_kids": "魔法圖形",
        "badge_kids": "純粹的數學魔法！",
        "loading_kids": "正在混合顏色和數學...",
        "again_kids": "重新繪製！"
      },
      "practical": {
        "header_kids": "遊樂場模擬",
        "title_kids": "看數學在行動！",
        "placeholder_kids": "我們今天要建造什麼？",
        "btn_kids": "啟動！",
        "loading_kids": "正在建造你的世界...",
        "empty_kids": "在上方輸入內容以開始！"
      },
      "practice": {
        "header_kids": "趣味測驗時間！",
        "sub_kids": "挑戰你的大腦",
        "badge_kids": "準備好了嗎？開始！",
        "input_label_kids": "我們今天要學習什麼？",
        "placeholder_kids": "數學魔法主題...",
        "difficulty_kids": "難度應該是多少？",
        "btn_kids": "開始冒險！",
        "loading_kids": "正在建造魔法路徑...",
        "congrats_kids": "耶！你做到了！",
        "score_kids": "你獲得了 {{total}} 分中的 {{score}} 分魔法點數！",
        "again_kids": "再玩一次！"
      },
      "custom": {
        "header_kids": "我的課程",
        "title_kids": "創建你的冒險",
        "input_label_kids": "你想掌握什麼？",
        "placeholder_kids": "例如：我想學習魔法圖形...",
        "past_kids": "過去的冒險",
        "btn_kids": "開始我的冒險！",
        "loading_btn_kids": "正在查閱魔法書...",
        "output_header_kids": "冒險卷軸",
        "output_sub_kids": "你的路徑",
        "loading_text_kids": "正在繪製你的藍圖...",
        "empty_kids": "你的冒險在等著你！"
      },
      "nav": {
        "magic_solver": "魔法求解器",
        "fun_quiz": "趣味測驗",
        "playground": "遊樂場",
        "art_maker": "藝術創作",
        "my_lessons": "我的課程"
      },
      "footer": {
        "kids": "Mathopy AI 用愛手繪"
      }
    }
  },
  bn: {
    translation: {
      "common": {
        "change_dimension": "ডাইমেনশন পরিবর্তন করুন",
        "eye_comfort": "চোখের আরাম",
        "theme_toggle": "থিম পরিবর্তন করুন",
        "menu": "মেনু",
        "execute": "চালান",
        "clear": "মুছে ফেলুন",
        "loading": "লোড হচ্ছে...",
        "play_again": "আবার খেলুন",
        "score": "স্কোর: {{score}}/{{total}}",
        "back": "পিছনে"
      },
      "age_selection": {
        "welcome": "MATHOPY-এ স্বাগতম",
        "choose_dimension": "আপনার গাণিতিক ডাইমেনশন বেছে নিন",
        "kids": "কিড মোড",
        "kids_sub": "ম্যাজিক এবং ক্রেয়ন"
      },
      "landing": {
        "features": "বৈশিষ্ট্য",
        "how_works": "কিভাবে কাজ করে",
        "play_now": "এখনই খেলুন!",
        "hero_title": "গণিত মানেই <0>ম্যাজিক!</0>",
        "hero_subtitle": "এমন এক পৃথিবীতে প্রবেশ করুন যেখানে সংখ্যাগুলি জীবন্ত হয়ে ওঠে! মাথোপির সাহায্যে ধাঁধা সমাধান করুন, বিশ্ব তৈরি করুন এবং শিল্পকলা তৈরি করুন।",
        "start_magic": "ম্যাজিক শুরু করুন",
        "unlock_brain": "আপনার মস্তিষ্ক খুলে দিন!",
        "cool_superpowers": "দুর্দান্ত সুপারপাওয়ার",
        "superpowers_sub": "মাথোপি দিয়ে আপনি কি করতে পারেন?",
        "how_to_play": "কিভাবে খেলবেন?",
        "step1_title": "আপনার ডাইমেনশন বেছে নিন",
        "step1_desc": "ম্যাজিক এবং সুন্দর ক্রেয়ন শিল্পের জন্য কিড মোড বেছে নিন।",
        "step2_title": "যেকোনো কিছু জিজ্ঞাসা করুন!",
        "step2_desc": "একটি সমস্যা লিখুন, এআই-এর সাথে কথা বলুন বা স্ক্রিনে একটি আকৃতি আঁকুন।",
        "step3_title": "তৈরি করুন এবং শেয়ার করুন",
        "step3_desc": "ম্যাজিক ড্রয়িংগুলি দেখা যাচ্ছে অথবা সহজে কঠিন ধাঁধা সমাধান করুন!",
        "ready_start": "শুরু করতে প্রস্তুত?",
        "play_kids": "বাচ্চাদের জন্য খেলুন",
        "copyright": "Mathopy © 2026 — ম্যাজিক ক্রেয়ন দিয়ে তৈরি",
        "feat1_title": "ম্যাজিক সলভার",
        "feat1_desc": "একটি ছবি তুলুন বা সমস্যা লিখুন। দেখুন কিভাবে এটি ম্যাজিকের মত সমাধান হয়!",
        "feat2_title": "আর্ট মেকার",
        "feat2_desc": "আপনার গাণিতিক সূত্রগুলিকে সুন্দর, রঙিন মাস্টারপিসে পরিণত করুন।",
        "feat3_title": "মজার কুইজ",
        "feat3_desc": "ভিডিও গেমের মতো মনে হয় এমন ধাঁধার মাধ্যমে আপনার মস্তিষ্ক পরীক্ষা করুন।",
        "test1_name": "শিক্ষক স্যাম",
        "test1_text": "মাথোপি গণিতকে খেলার সময়ের মতো মনে করায়! আমার ছাত্ররা এটি পছন্দ করে।",
        "test2_name": "লিও, ৮ বছর",
        "test2_text": "আমি আগে গণিত ঘৃণা করতাম, কিন্তু এখন সংখ্যা দিয়ে শিল্পকলা তৈরি করতে ভালোবাসি!",
        "test3_name": "ডাঃ জেন",
        "test3_text": "উচ্চ-স্তরের বিশ্লেষণ এবং খেলার মাধ্যমে শেখার মধ্যে নিখুঁত ভারসাম্য।"
      },
      "kids": {
        "backpack": "আমার ব্যাকপ্যাক",
        "quote": "«প্রত্যেক শিশুই একজন শিল্পী। সমস্যা হল আমরা বড় হওয়ার পরেও কিভাবে শিল্পী থাকা যায়»।"
      },
      "solver": {
        "header": "ম্যাজিক ম্যাথ সলভার",
        "sub_text": "আমরা একসাথে আপনার সমস্যা সমাধান করার সাথে সাথে ম্যাজিক দেখুন!",
        "logical_deduction": "ম্যাজিক ব্যাখ্যা",
        "processing": "রঙ এবং গণিত মিশ্রিত করা হচ্ছে...",
        "placeholder": "আপনার গাণিতিক সমস্যা এখানে লিখুন...",
        "analyzing": "বিশ্লেষণ করা হচ্ছে...",
        "input_label": "আপনার সমস্যা লিখুন। ম্যাজিক দেখুন!"
      },
      "visualizer": {
        "header_kids": "আর্ট মেকার",
        "placeholder_kids": "আপনার ম্যাজিক ড্রয়িং বর্ণনা করুন... যেমন একটি রঙিন রেইনবো স্পাইরাল!",
        "btn_kids": "ম্যাজিক ড্রয়িং তৈরি করুন!",
        "sidebar_kids": "ম্যাজিক আকৃতি",
        "badge_kids": "খাঁটি গণিত ম্যাজিক!",
        "loading_kids": "রঙ এবং গণিত মিশ্রিত করা হচ্ছে...",
        "again_kids": "আবার আঁকুন!"
      },
      "practical": {
        "header_kids": "প্লেগ্রাউন্ড সিমুলেশন",
        "title_kids": "কাজে গণিত দেখুন!",
        "placeholder_kids": "আজ আমাদের কি তৈরি করা উচিত?",
        "btn_kids": "শুরু করুন!",
        "loading_kids": "আপনার বিশ্ব তৈরি করা হচ্ছে...",
        "empty_kids": "শুরু করার জন্য উপরে কিছু লিখুন!"
      },
      "practice": {
        "header_kids": "মজার কুইজ সময়!",
        "sub_kids": "আপনার মস্তিষ্ককে চ্যালেঞ্জ করুন",
        "badge_kids": "রেডি? সেট? গো!",
        "input_label_kids": "আজ আমরা কি পড়ব?",
        "placeholder_kids": "গণিত ম্যাজিক বিষয়...",
        "difficulty_kids": "এটি কতটা কঠিন হওয়া উচিত?",
        "btn_kids": "অ্যাডভেঞ্চার শুরু করুন!",
        "loading_kids": "ম্যাজিক পাথ তৈরি করা হচ্ছে...",
        "congrats_kids": "ইয়ায়! আপনি পেরেছেন!",
        "score_kids": "আপনি {{total}} এর মধ্যে {{score}} ম্যাজিক পয়েন্ট পেয়েছেন!",
        "again_kids": "আবার খেলুন!"
      },
      "custom": {
        "header_kids": "আমার পাঠ",
        "title_kids": "আপনার নিজস্ব কোয়েস্ট তৈরি করুন",
        "input_label_kids": "আপনি কি আয়ত্ত করতে চান?",
        "placeholder_kids": "যেমন: আমি ম্যাজিক আকৃতি সম্পর্কে শিখতে চাই...",
        "past_kids": "অতীত কোয়েস্ট",
        "btn_kids": "আমার কোয়েস্ট তৈরি করুন!",
        "loading_btn_kids": "ম্যাজিক বইয়ের পরামর্শ নেওয়া হচ্ছে...",
        "output_header_kids": "কোয়েস্ট স্ক্রোল",
        "output_sub_kids": "আপনার পথ",
        "loading_text_kids": "আপনার রোডম্যাপ আঁকা হচ্ছে...",
        "empty_kids": "আপনার কোয়েস্ট অপেক্ষা করছে!"
      },
      "nav": {
        "magic_solver": "ম্যাজিক সলভার",
        "fun_quiz": "মজার কুইজ",
        "playground": "খেলার মাঠ",
        "art_maker": "আর্ট মেকার",
        "my_lessons": "আমার পাঠ"
      },
      "footer": {
        "kids": "Mathopy AI দ্বারা ভালোবেসে হাতে তৈরি"
      }
    }
  },
  tr: {
    translation: {
      "common": {
        "change_dimension": "Boyutu Değiştir",
        "eye_comfort": "Göz Rahatlığı",
        "theme_toggle": "Temayı Değiştir",
        "menu": "Menü",
        "execute": "Çalıştır",
        "clear": "Temizle",
        "loading": "Yükleniyor...",
        "play_again": "Tekrar Oyna",
        "score": "Skor: {{score}}/{{total}}",
        "back": "Geri"
      },
      "age_selection": {
        "welcome": "MATHOPY'YE HOŞ GELDİNİZ",
        "choose_dimension": "Matematiksel boyutunuzu seçin",
        "kids": "Çocuk Modu",
        "kids_sub": "Sihir ve Pastel Boya"
      },
      "landing": {
        "features": "Özellikler",
        "how_works": "Nasıl Çalışır",
        "play_now": "Şimdi Oyna!",
        "hero_title": "Matematik <0>Sihirdir!</0>",
        "hero_subtitle": "Sayıların canlandığı bir dünyaya adım atın! Mathopy'nin gücüyle bulmacaları çözün, dünyalar inşa edin ve sanat yaratın.",
        "start_magic": "Sihri Başlat",
        "unlock_brain": "Beyninin kilidini aç!",
        "cool_superpowers": "Harika Süper Güçler",
        "superpowers_sub": "Mathopy ile neler yapabilirsiniz?",
        "how_to_play": "Nasıl Oynanır?",
        "step1_title": "Boyutunuzu Seçin",
        "step1_desc": "Sihir ve güzel pastel boya sanatı için Çocuk Modu'nu seçin.",
        "step2_title": "Her Şeyi Sorun!",
        "step2_desc": "Bir problem yazın, yapay zeka ile konuşun veya ekrana bir şekil çizin.",
        "step3_title": "Yarat ve Paylaş",
        "step3_desc": "Sihirli çizimlerin ortaya çıkışını izleyin veya zor bulmacaları kolayca çözün!",
        "ready_start": "Başlamaya hazır mısınız?",
        "play_kids": "Çocuklar için Oyna",
        "copyright": "Mathopy © 2026 — Sihirli pastel boyalarla yapıldı",
        "feat1_title": "Sihirli Çözücü",
        "feat1_desc": "Bir fotoğraf çekin veya problemi yazın. Sihir gibi çözülmesini izleyin!",
        "feat2_title": "Sanat Oluşturucu",
        "feat2_desc": "Matematik formüllerinizi güzel, renkli şaheserlere dönüştürün.",
        "feat3_title": "Eğlenceli Bilgi Yarışması",
        "feat3_desc": "Bir video oyunu gibi hissettiren bulmacalarla beyninizi test edin.",
        "test1_name": "Öğretmen Sam",
        "test1_text": "Mathopy matematiği oyun zamanı gibi hissettiriyor! Öğrencilerim buna bayılıyor.",
        "test2_name": "Leo, 8 yaşında",
        "test2_text": "Eskiden matematikten nefret ederdim ama şimdi sayılarla sanat yapmayı seviyorum!",
        "test3_name": "Dr. Jane",
        "test3_text": "Üst düzey analiz ile eğlenceli öğrenme arasında mükemmel bir denge."
      },
      "kids": {
        "backpack": "Sırt Çantam",
        "quote": "«Her çocuk bir sanatçıdır. Sorun, büyüdüğümüzde nasıl sanatçı kalacağımızdır»."
      },
      "solver": {
        "header": "Sihirli Matematik Çözücü",
        "sub_text": "Biz sorunlarınızı birlikte çözerken sihrin ortaya çıkışını izleyin!",
        "logical_deduction": "Sihirli Açıklama",
        "processing": "Renkleri ve matematiği karıştırıyoruz...",
        "placeholder": "Matematik probleminizi buraya yazın...",
        "analyzing": "Analiz ediliyor...",
        "input_label": "Probleminizi yazın. Sihrin gerçekleşmesini izleyin!"
      },
      "visualizer": {
        "header_kids": "Sanat Oluşturucu",
        "placeholder_kids": "Sihirli çiziminizi tanımlayın... örneğin kıvırcık bir gökkuşağı spirali!",
        "btn_kids": "Sihirli Çizim Yap!",
        "sidebar_kids": "Sihirli Şekiller",
        "badge_kids": "Saf Matematik Sihri!",
        "loading_kids": "Renkleri ve matematiği karıştırıyoruz...",
        "again_kids": "Tekrar Çiz!"
      },
      "practical": {
        "header_kids": "Oyun Alanı Simülasyonları",
        "title_kids": "Matematiği Aksiyon Halinde Görün!",
        "placeholder_kids": "Bugün ne inşa etmeliyiz?",
        "btn_kids": "Başlat!",
        "loading_kids": "Dünyanızı inşa ediyoruz...",
        "empty_kids": "Başlamak için yukarıya bir şeyler yazın!"
      },
      "practice": {
        "header_kids": "Eğlenceli Bilgi Yarışması Vakti!",
        "sub_kids": "Beyninize Meydan Okuyun",
        "badge_kids": "Hazır? Başla! Hadi!",
        "input_label_kids": "Bugün ne çalışıyoruz?",
        "placeholder_kids": "Matematik sihirli konusu...",
        "difficulty_kids": "Ne kadar zor olmalı?",
        "btn_kids": "Maceraya Başla!",
        "loading_kids": "Sihirli yollar inşa ediyoruz...",
        "congrats_kids": "YAY! BAŞARDIN!",
        "score_kids": "{{total}} üzerinden {{score}} sihirli puan kazandınız!",
        "again_kids": "Tekrar Oyna!"
      },
      "custom": {
        "header_kids": "Derslerim",
        "title_kids": "Kendi Görevini Oluştur",
        "input_label_kids": "Neyi ustalaşmak istiyorsun?",
        "placeholder_kids": "örneğin: Sihirli şekiller hakkında öğrenmek istiyorum...",
        "past_kids": "Geçmiş Görevler",
        "btn_kids": "Görevimi Oluştur!",
        "loading_btn_kids": "Sihirli kitaba danışıyoruz...",
        "output_header_kids": "Görev Parşömeni",
        "output_sub_kids": "Senin Yolun",
        "loading_text_kids": "Yol haritanı çiziyoruz...",
        "empty_kids": "Görevin seni bekliyor!"
      },
      "nav": {
        "magic_solver": "Sihirli Çözücü",
        "fun_quiz": "Eğlenceli Bilgi Yarışması",
        "playground": "Oyun Alanı",
        "art_maker": "Sanat Oluşturucu",
        "my_lessons": "Derslerim"
      },
      "footer": {
        "kids": "Mathopy AI tarafından sevgiyle elle çizildi"
      }
    }
  },
  vi: {
    translation: {
      "common": {
        "change_dimension": "Thay đổi chiều",
        "eye_comfort": "Chế độ bảo vệ mắt",
        "theme_toggle": "Chuyển đổi chủ đề",
        "menu": "Menu",
        "execute": "Thực hiện",
        "clear": "Xóa",
        "loading": "Đang tải...",
        "play_again": "Chơi lại",
        "score": "Điểm: {{score}}/{{total}}",
        "back": "Quay lại"
      },
      "age_selection": {
        "welcome": "CHÀO MỪNG ĐẾN VỚI MATHOPY",
        "choose_dimension": "Chọn chiều không gian toán học của bạn",
        "kids": "Chế độ trẻ em",
        "kids_sub": "Phép thuật & Bút màu"
      },
      "landing": {
        "features": "Tính năng",
        "how_works": "Cách thức hoạt động",
        "play_now": "Chơi ngay!",
        "hero_title": "Toán học là <0>Phép thuật!</0>",
        "hero_subtitle": "Bước vào thế giới nơi những con số trở nên sống động! Giải các câu đố, xây dựng thế giới và sáng tạo nghệ thuật với sức mạnh của Mathopy.",
        "start_magic": "Bắt đầu phép thuật",
        "unlock_brain": "Mở khóa bộ não của bạn!",
        "cool_superpowers": "Siêu năng lực tuyệt vời",
        "superpowers_sub": "Bạn có thể làm gì với Mathopy?",
        "how_to_play": "Cách chơi?",
        "step1_title": "Chọn chiều không gian của bạn",
        "step1_desc": "Chọn Chế độ trẻ em để trải nghiệm phép thuật và nghệ thuật bút màu đẹp mắt.",
        "step2_title": "Hỏi bất cứ điều gì!",
        "step2_desc": "Nhập một bài toán, nói chuyện với AI hoặc vẽ một hình khối trên màn hình.",
        "step3_title": "Sáng tạo và Chia sẻ",
        "step3_desc": "Xem các bản vẽ phép thuật xuất hiện hoặc giải các câu đố khó một cách dễ dàng!",
        "ready_start": "Sẵn sàng bắt đầu?",
        "play_kids": "Chơi cho trẻ em",
        "copyright": "Mathopy © 2026 — Được làm bằng bút màu phép thuật",
        "feat1_title": "Giải toán phép thuật",
        "feat1_desc": "Chụp ảnh hoặc nhập bài toán. Xem nó được giải quyết như một phép thuật!",
        "feat2_title": "Sáng tạo nghệ thuật",
        "feat2_desc": "Biến các công thức toán học của bạn thành những kiệt tác nghệ thuật đầy màu sắc.",
        "feat3_title": "Đố vui",
        "feat3_desc": "Kiểm tra trí não của bạn với các câu đố mang lại cảm giác như một trò chơi điện tử.",
        "test1_name": "Thầy Sam",
        "test1_text": "Mathopy biến toán học thành giờ chơi! Học sinh của tôi rất yêu thích nó.",
        "test2_name": "Leo, 8 tuổi",
        "test2_text": "Tôi từng ghét môn toán, nhưng giờ tôi thích dùng những con số để tạo nên nghệ thuật!",
        "test3_name": "TS. Jane",
        "test3_text": "Sự cân bằng hoàn hảo giữa phân tích chuyên sâu và học tập vui vẻ."
      },
      "kids": {
        "backpack": "Balo của tôi",
        "quote": "«Mỗi đứa trẻ đều là một nghệ sĩ. Vấn đề là làm sao để vẫn là một nghệ sĩ khi chúng ta lớn lên»."
      },
      "solver": {
        "header": "Giải toán phép thuật",
        "sub_text": "Xem phép thuật lan tỏa khi chúng ta cùng nhau giải quyết vấn đề!",
        "logical_deduction": "Giải thích phép thuật",
        "processing": "Đang pha trộn màu sắc và toán học...",
        "placeholder": "Nhập bài toán của bạn tại đây...",
        "analyzing": "Đang phân tích...",
        "input_label": "Nhập bài toán của bạn. Xem phép thuật xảy ra!"
      },
      "visualizer": {
        "header_kids": "Sáng tạo nghệ thuật",
        "placeholder_kids": "Mô tả bức vẽ phép thuật của bạn... ví dụ: một vòng xoáy cầu vồng rực rỡ!",
        "btn_kids": "Tạo bức vẽ phép thuật!",
        "sidebar_kids": "Hình khối phép thuật",
        "badge_kids": "Phép thuật toán học thuần túy!",
        "loading_kids": "Đang pha trộn màu sắc và toán học...",
        "again_kids": "Vẽ lại!"
      },
      "practical": {
        "header_kids": "Mô phỏng sân chơi",
        "title_kids": "Xem toán học trong thực tế!",
        "placeholder_kids": "Chúng ta nên xây dựng gì hôm nay?",
        "btn_kids": "Bắt đầu!",
        "loading_kids": "Đang xây dựng thế giới của bạn...",
        "empty_kids": "Nhập nội dung gì đó ở trên để bắt đầu!"
      },
      "practice": {
        "header_kids": "Giờ đố vui!",
        "sub_kids": "Thử thách trí não của bạn",
        "badge_kids": "Sẵn sàng? Chuẩn bị! Đi!",
        "input_label_kids": "Hôm nay chúng ta học gì?",
        "placeholder_kids": "Chủ đề toán học phép thuật...",
        "difficulty_kids": "Độ khó như thế nào?",
        "btn_kids": "Bắt đầu cuộc phiêu lưu!",
        "loading_kids": "Đang xây dựng con đường phép thuật...",
        "congrats_kids": "YAY! BẠN ĐÃ LÀM ĐƯỢC!",
        "score_kids": "Bạn đã đạt được {{score}} trên {{total}} điểm phép thuật!",
        "again_kids": "Chơi lại!"
      },
      "custom": {
        "header_kids": "Bài học của tôi",
        "title_kids": "Tạo nhiệm vụ của riêng bạn",
        "input_label_kids": "Bạn muốn thành thạo điều gì?",
        "placeholder_kids": "ví dụ: Tôi muốn học về các hình khối phép thuật...",
        "past_kids": "Nhiệm vụ cũ",
        "btn_kids": "Tạo nhiệm vụ!",
        "loading_btn_kids": "Đang tìm hiểu cuốn sách phép thuật...",
        "output_header_kids": "Cuộn giấy nhiệm vụ",
        "output_sub_kids": "Con đường của bạn",
        "loading_text_kids": "Đang vẽ lộ trình cho bạn...",
        "empty_kids": "Nhiệm vụ đang chờ đợi bạn!"
      },
      "nav": {
        "magic_solver": "Giải toán phép thuật",
        "fun_quiz": "Đố vui",
        "playground": "Sân chơi",
        "art_maker": "Sáng tạo nghệ thuật",
        "my_lessons": "Bài học của tôi"
      },
      "footer": {
        "kids": "Được vẽ tay tỉ mỉ bởi Mathopy AI"
      }
    }
  },
  pl: {
    translation: {
      "common": {
        "change_dimension": "Zmień Wymiar",
        "eye_comfort": "Komfort Oczu",
        "theme_toggle": "Przełącz Motyw",
        "menu": "Menu",
        "execute": "Wykonaj",
        "clear": "Wyczyść",
        "loading": "Ładowanie...",
        "play_again": "Zagraj Ponownie",
        "score": "Wynik: {{score}}/{{total}}",
        "back": "Wstecz"
      },
      "age_selection": {
        "welcome": "WITAJ W MATHOPY",
        "choose_dimension": "Wybierz swój wymiar matematyczny",
        "kids": "Tryb dla Dzieci",
        "kids_sub": "Magia i Kredki"
      },
      "landing": {
        "features": "Funkcje",
        "how_works": "Jak to działa",
        "play_now": "Graj teraz!",
        "hero_title": "Matematyka to <0>Magia!</0>",
        "hero_subtitle": "Wejdź do świata, w którym liczby ożywają! Rozwiązuj zagadki, buduj światy i twórz sztukę dzięki potędze Mathopy.",
        "start_magic": "Rozpocznij Magię",
        "unlock_brain": "Odblokuj swój mózg!",
        "cool_superpowers": "Fajne Supermoce",
        "superpowers_sub": "Co możesz zrobić z Mathopy?",
        "how_to_play": "Jak grać?",
        "step1_title": "Wybierz swój wymiar",
        "step1_desc": "Wybierz Tryb dla Dzieci, aby doświadczyć magii i pięknej sztuki kredkowej.",
        "step2_title": "Zapytaj o wszystko!",
        "step2_desc": "Wpisz problem, porozmawiaj z AI lub narysuj kształt na ekranie.",
        "step3_title": "Twórz i dziel się",
        "step3_desc": "Zobacz, jak pojawiają się magiczne rysunki lub z łatwością rozwiązuj trudne zagadki!",
        "ready_start": "Gotowy, aby zacząć?",
        "play_kids": "Graj dla dzieci",
        "copyright": "Mathopy © 2026 — Wykonano magicznymi kredkami",
        "feat1_title": "Magiczny Solver",
        "feat1_desc": "Zrób zdjęcie lub wpisz problem. Zobacz, jak rozwiązuje się jak magia!",
        "feat2_title": "Twórca Sztuki",
        "feat2_desc": "Zmień swoje wzory matematyczne w piękne, kolorowe arcydzieła.",
        "feat3_title": "Fajny Quiz",
        "feat3_desc": "Przetestuj swój mózg za pomocą zagadek, które sprawiają wrażenie gry wideo.",
        "test1_name": "Nauczyciel Sam",
        "test1_text": "Mathopy sprawia, że matematyka kojarzy się z zabawą! Moi uczniowie są tym zachwyceni.",
        "test2_name": "Leo, 8 lat",
        "test2_text": "Kiedyś nienawidziłem matematyki, ale teraz uwielbiam tworzyć sztukę za pomocą liczb!",
        "test3_name": "Dr Jane",
        "test3_text": "Idealna równowaga między analizą na wysokim poziomie a nauką przez zabawę."
      },
      "kids": {
        "backpack": "Mój plecak",
        "quote": "«Każde dziecko jest artystą. Problem polega na tym, jak pozostać artystą, kiedy dorośniemy»."
      },
      "solver": {
        "header": "Magiczny Matematyczny Solver",
        "sub_text": "Zobacz, jak magia się rozwija, gdy wspólnie rozwiązujemy Twoje problemy!",
        "logical_deduction": "Magiczne Wyjaśnienie",
        "processing": "Mieszamy kolory i matematykę...",
        "placeholder": "Wpisz tutaj swój problem matematyczny...",
        "analyzing": "Analizowanie...",
        "input_label": "Wpisz swój problem. Zobacz, jak dzieje się magia!"
      },
      "visualizer": {
        "header_kids": "Twórca Sztuki",
        "placeholder_kids": "Opisz swój magiczny rysunek... na przykład tęczową spiralę!",
        "btn_kids": "Stwórz magiczny rysunek!",
        "sidebar_kids": "Magiczne Kształty",
        "badge_kids": "Czysta matematyczna magia!",
        "loading_kids": "Mieszamy kolory i matematykę...",
        "again_kids": "Rysuj ponownie!"
      },
      "practical": {
        "header_kids": "Symulacje na placu zabaw",
        "title_kids": "Zobacz matematykę w działaniu!",
        "placeholder_kids": "Co dzisiaj zbudujemy?",
        "btn_kids": "Uruchom!",
        "loading_kids": "Budujemy Twój świat...",
        "empty_kids": "Wpisz coś powyżej, aby zacząć!"
      },
      "practice": {
        "header_kids": "Czas na fajny quiz!",
        "sub_kids": "Rzuć wyzwanie swojemu mózgowi",
        "badge_kids": "Gotowy? Do biegu! START!",
        "input_label_kids": "Czego się dzisiaj uczymy?",
        "placeholder_kids": "Temat magicznej matematyki...",
        "difficulty_kids": "Jak trudne to powinno być?",
        "btn_kids": "Rozpocznij Przygodę!",
        "loading_kids": "Budujemy magiczne ścieżki...",
        "congrats_kids": "HURRA! ZROBIŁEŚ TO!",
        "score_kids": "Zdobyłeś {{score}} z {{total}} magicznych punktów!",
        "again_kids": "Zagraj Ponownie!"
      },
      "custom": {
        "header_kids": "Moje lekcje",
        "title_kids": "Stwórz własne zadanie",
        "input_label_kids": "Co chcesz opanować?",
        "placeholder_kids": "np.: Chcę dowiedzieć się o magicznych kształtach...",
        "past_kids": "Poprzednie zadania",
        "btn_kids": "Stwórz moje zadanie!",
        "loading_btn_kids": "Konsultujemy się z magiczną księgą...",
        "output_header_kids": "Zwoje zadania",
        "output_sub_kids": "Twoja ścieżka",
        "loading_text_kids": "Rysujemy Twoją mapę...",
        "empty_kids": "Twoje zadanie czeka!"
      },
      "nav": {
        "magic_solver": "Magiczny Solver",
        "fun_quiz": "Fajny Quiz",
        "playground": "Plac Zabaw",
        "art_maker": "Twórca Sztuki",
        "my_lessons": "Moje lekcje"
      },
      "footer": {
        "kids": "Ręcznie narysowane z miłością przez Mathopy AI"
      }
    }
  },
  uk: {
    translation: {
      "common": {
        "change_dimension": "Змінити вимір",
        "eye_comfort": "Комфорт для очей",
        "theme_toggle": "Змінити тему",
        "menu": "Меню",
        "execute": "Виконати",
        "clear": "Очистити",
        "loading": "Завантаження...",
        "play_again": "Грати знову",
        "score": "Рахунок: {{score}}/{{total}}",
        "back": "Назад"
      },
      "age_selection": {
        "welcome": "ЛАСКАВО ПРОСИМО ДО MATHOPY",
        "choose_dimension": "Оберіть свій математичний вимір",
        "kids": "Дитячий режим",
        "kids_sub": "Магія та крейди"
      },
      "landing": {
        "features": "Особливості",
        "how_works": "Як це працює",
        "play_now": "Грати зараз!",
        "hero_title": "Математика — це <0>магія!</0>",
        "hero_subtitle": "Крокуйте у світ, де числа оживають! Розв'язуйте головоломки, будуйте світи та творіть мистецтво за допомогою Mathopy.",
        "start_magic": "Почати магію",
        "unlock_brain": "Розблокуй свій мозок!",
        "cool_superpowers": "Круті суперздібності",
        "superpowers_sub": "Що можна робити в Mathopy?",
        "how_to_play": "Як грати?",
        "step1_title": "Обери свій вимір",
        "step1_desc": "Обери Дитячий режим для магії та красивих малюнків крейдою.",
        "step2_title": "Запитуй про будь-що!",
        "step2_desc": "Введи задачу, поговори з ШІ або намалюй фігуру на екрані.",
        "step3_title": "Твори та ділись",
        "step3_desc": "Дивись, як з'являються магічні малюнки, або легко розв'язуй складні головоломки!",
        "ready_start": "Готові почати?",
        "play_kids": "Грати для дітей",
        "copyright": "Mathopy © 2026 — Зроблено магічними крейдами",
        "feat1_title": "Магічний розв'язувач",
        "feat1_desc": "Сфотографуй або введи задачу. Дивись, як вона розв'язується як магія!",
        "feat2_title": "Мистецтво",
        "feat2_desc": "Перетворюй свої математичні формули на красиві кольорові шедеври.",
        "feat3_title": "Весела вікторина",
        "feat3_desc": "Тренуй мозок за допомогою головоломок, які відчуваються як відеогра.",
        "test1_name": "Учитель Сем",
        "test1_text": "Mathopy перетворює математику на гру! Мої учні в захваті.",
        "test2_name": "Лео, 8 років",
        "test2_text": "Раніше я ненавидів математику, але тепер обожнюю творити мистецтво з чисел!",
        "test3_name": "Доктор Джейн",
        "test3_text": "Ідеальний баланс між глибоким аналізом та ігровим навчанням."
      },
      "kids": {
        "backpack": "Мій рюкзак",
        "quote": "«Кожна дитина — художник. Проблема в тому, як залишитися художником, коли ми виростемо»."
      },
      "solver": {
        "header": "Магічний математичний розв'язувач",
        "sub_text": "Дивись за магією, поки ми разом розв'язуємо твої задачі!",
        "logical_deduction": "Магічне пояснення",
        "processing": "Змішуємо кольори та математику...",
        "placeholder": "Введи свою математичну задачу тут...",
        "analyzing": "Аналіз...",
        "input_label": "Введи задачу. Дивись, як відбувається магія!"
      },
      "visualizer": {
        "header_kids": "Творець мистецтва",
        "placeholder_kids": "Опиши свій магічний малюнок... наприклад, веселкову спіраль!",
        "btn_kids": "Створити магічний малюнок!",
        "sidebar_kids": "Магічні фігури",
        "badge_kids": "Чиста математична магія!",
        "loading_kids": "Змішуємо кольори та математику...",
        "again_kids": "Малювати знову!"
      },
      "practical": {
        "header_kids": "Симуляції на майданчику",
        "title_kids": "Побач математику в дії!",
        "placeholder_kids": "Що збудуємо сьогодні?",
        "btn_kids": "Запуск!",
        "loading_kids": "Будуємо твій світ...",
        "empty_kids": "Введи щось вище, щоб почати!"
      },
      "practice": {
        "header_kids": "Час веселої вікторини!",
        "sub_kids": "Кинь виклик своєму мозку",
        "badge_kids": "Готові? Увага! РУШ!",
        "input_label_kids": "Що вивчаємо сьогодні?",
        "placeholder_kids": "Тема магічної математики...",
        "difficulty_kids": "Наскільки складно має бути?",
        "btn_kids": "Почати пригоду!",
        "loading_kids": "Будуємо магічні шляхи...",
        "congrats_kids": "УРА! ТИ ЗРОБИВ ЦЕ!",
        "score_kids": "Ти набрав {{score}} з {{total}} магічних очок!",
        "again_kids": "Грати знову!"
      },
      "custom": {
        "header_kids": "Мої уроки",
        "title_kids": "Створи свій квест",
        "input_label_kids": "Що ти хочеш освоїти?",
        "placeholder_kids": "напр.: Я хочу дізнатися про магічні фігури...",
        "past_kids": "Минулі квести",
        "btn_kids": "Створити квест!",
        "loading_btn_kids": "Гортаємо магічну книгу...",
        "output_header_kids": "Сувій квесту",
        "output_sub_kids": "Твій шлях",
        "loading_text_kids": "Малюємо твою дорожню карту...",
        "empty_kids": "Твій квест чекає!"
      },
      "nav": {
        "magic_solver": "Магічний розв'язувач",
        "fun_quiz": "Весела вікторина",
        "playground": "Майданчик",
        "art_maker": "Мистецтво",
        "my_lessons": "Мої уроки"
      },
      "footer": {
        "kids": "Намальовано вручну з любов'ю від Mathopy AI"
      }
    }
  },
  nl: {
    translation: {
      "common": {
        "change_dimension": "Verander Dimensie",
        "eye_comfort": "Oogcomfort",
        "theme_toggle": "Thema Wisselen",
        "menu": "Menu",
        "execute": "Uitvoeren",
        "clear": "Wissen",
        "loading": "Laden...",
        "play_again": "Opnieuw Spelen",
        "score": "Score: {{score}}/{{total}}",
        "back": "Terug"
      },
      "age_selection": {
        "welcome": "WELKOM BIJ MATHOPY",
        "choose_dimension": "Kies je wiskundige dimensie",
        "kids": "Kindermodus",
        "kids_sub": "Magie & Krijtjes"
      },
      "landing": {
        "features": "Kenmerken",
        "how_works": "Hoe het werkt",
        "play_now": "Speel nu!",
        "hero_title": "Wiskunde is <0>Magie!</0>",
        "hero_subtitle": "Stap in een wereld waar cijfers tot leven komen! Los puzzels op, bouw werelden en creëer kunst met de kracht van Mathopy.",
        "start_magic": "Start Magie",
        "unlock_brain": "Ontgrendel je brein!",
        "cool_superpowers": "Coole Superkrachten",
        "superpowers_sub": "Wat kun je doen met Mathopy?",
        "how_to_play": "Hoe te spelen?",
        "step1_title": "Kies je dimensie",
        "step1_desc": "Kies de Kindermodus voor magie en prachtige krijtkunst.",
        "step2_title": "Vraag alles!",
        "step2_desc": "Typ een probleem, praat met AI of teken een vorm op het scherm.",
        "step3_title": "Creëer en Deel",
        "step3_desc": "Zie hoe magische tekeningen verschijnen of los moeilijke puzzels met gemak op!",
        "ready_start": "Klaar om te beginnen?",
        "play_kids": "Speel voor kinderen",
        "copyright": "Mathopy © 2026 — Gemaakt met magische krijtjes",
        "feat1_title": "Magische Oplosser",
        "feat1_desc": "Maak een foto of typ een probleem. Kijk hoe het magisch wordt opgelost!",
        "feat2_title": "Kunstenaar",
        "feat2_desc": "Verander je wiskundige formules in prachtige, kleurrijke meesterwerken.",
        "feat3_title": "Leuke Quiz",
        "feat3_desc": "Test je brein met puzzels die aanvoelen als een videogame.",
        "test1_name": "Meester Sam",
        "test1_text": "Mathopy laat wiskunde als speeltijd voelen! Mijn leerlingen zijn er dol op.",
        "test2_name": "Leo, 8 jaar",
        "test2_text": "Vroeger haatte ik wiskunde, maar nu vind ik het geweldig om kunst te maken met cijfers!",
        "test3_name": "Dr. Jane",
        "test3_text": "De perfecte balans tussen diepgaande analyse en spelenderwijs leren."
      },
      "kids": {
        "backpack": "Mijn rugzak",
        "quote": "«Ieder kind is een kunstenaar. Het probleem is hoe een kunstenaar te blijven als we groot worden»."
      },
      "solver": {
        "header": "Magische Wiskunde Oplosser",
        "sub_text": "Zie de magie zich ontvouwen terwijl we samen je problemen oplossen!",
        "logical_deduction": "Magische Uitleg",
        "processing": "Kleuren en wiskunde mengen...",
        "placeholder": "Typ hier je wiskundige probleem...",
        "analyzing": "Analiseren...",
        "input_label": "Typ je probleem. Zie de magie gebeuren!"
      },
      "visualizer": {
        "header_kids": "Kunstenaar",
        "placeholder_kids": "Beschrijf je magische tekening... bijvoorbeeld een regenboogspiraal!",
        "btn_kids": "Maak een magische tekening!",
        "sidebar_kids": "Magische Vormen",
        "badge_kids": "Pure Wiskunde Magie!",
        "loading_kids": "Kleuren en wiskunde mengen...",
        "again_kids": "Opnieuw tekenen!"
      },
      "practical": {
        "header_kids": "Speeltuin Simulaties",
        "title_kids": "Zie Wiskunde in Actie!",
        "placeholder_kids": "Wat zullen we vandaag bouwen?",
        "btn_kids": "Start!",
        "loading_kids": "Bouwen aan je wereld...",
        "empty_kids": "Typ hierboven iets om te beginnen!"
      },
      "practice": {
        "header_kids": "Tijd voor een leuke quiz!",
        "sub_kids": "Daag je brein uit",
        "badge_kids": "Klaar? Af! GAAN!",
        "input_label_kids": "Wat bestuderen we vandaag?",
        "placeholder_kids": "Wiskunde magie onderwerp...",
        "difficulty_kids": "Hoe moeilijk moet het zijn?",
        "btn_kids": "Start Avontuur!",
        "loading_kids": "Magische paden bouwen...",
        "congrats_kids": "HOERA! JE HEBT HET GEDAAN!",
        "score_kids": "Je hebt {{score}} van de {{total}} magische punten behaald!",
        "again_kids": "Opnieuw Spelen!"
      },
      "custom": {
        "header_kids": "Mijn lessen",
        "title_kids": "Maak je eigen missie",
        "input_label_kids": "Wat wil je onder de knie krijgen?",
        "placeholder_kids": "bijv.: Ik wil leren over magische vormen...",
        "past_kids": "Vorige missies",
        "btn_kids": "Maak mijn missie!",
        "loading_btn_kids": "Het magische boek raadplegen...",
        "output_header_kids": "Missie Scroll",
        "output_sub_kids": "Jouw Pad",
        "loading_text_kids": "Je routekaart tekenen...",
        "empty_kids": "Je missie wacht op je!"
      },
      "nav": {
        "magic_solver": "Magische Oplosser",
        "fun_quiz": "Leuke Quiz",
        "playground": "Speeltuin",
        "art_maker": "Kunstenaar",
        "my_lessons": "Mijn lessen"
      },
      "footer": {
        "kids": "Met liefde met de hand getekend door Mathopy AI"
      }
    }
  },
  th: {
    translation: {
      "common": {
        "change_dimension": "เปลี่ยนมิติ",
        "eye_comfort": "ถนอมสายตา",
        "theme_toggle": "เปลี่ยนธีม",
        "menu": "เมนู",
        "execute": "รัน",
        "clear": "ล้าง",
        "loading": "กำลังโหลด...",
        "play_again": "เล่นอีกครั้ง",
        "score": "คะแนน: {{score}}/{{total}}",
        "back": "กลับ"
      },
      "age_selection": {
        "welcome": "ยินดีต้อนรับสู่ MATHOPY",
        "choose_dimension": "เลือกมิติทางคณิตศาสตร์ของคุณ",
        "kids": "โหมดเด็ก",
        "kids_sub": "เวทมนตร์และสีเทียน"
      },
      "landing": {
        "features": "คุณสมบัติ",
        "how_works": "วิธีการใช้งาน",
        "play_now": "เล่นเลย!",
        "hero_title": "คณิตศาสตร์คือ <0>เวทมนตร์!</0>",
        "hero_subtitle": "ก้าวเข้าสู่โลกที่ตัวเลขมีชีวิต! แก้ปริศนา สร้างโลก และสร้างสรรค์ศิลปะด้วยพลังของ Mathopy",
        "start_magic": "เริ่มเวทมนตร์",
        "unlock_brain": "ปลดล็อกสมองของคุณ!",
        "cool_superpowers": "พลังวิเศษสุดเจ๋ง",
        "superpowers_sub": "คุณทำอะไรกับ Mathopy ได้บ้าง?",
        "how_to_play": "เล่นอย่างไร?",
        "step1_title": "เลือกมิติของคุณ",
        "step1_desc": "เลือกโหมดเด็กเพื่อสัมผัสเวทมนตร์และศิลปะสีเทียนที่สวยงาม",
        "step2_title": "ถามได้ทุกอย่าง!",
        "step2_desc": "พิมพ์โจทย์ พูดคุยกับ AI หรือวาดรูปทรงบนหน้าจอ",
        "step3_title": "สร้างและแบ่งปัน",
        "step3_desc": "ดูภาพวาดเวทมนตร์ปรากฏขึ้น หรือแก้โจทย์ยากๆ ได้อย่างง่ายดาย!",
        "ready_start": "พร้อมเริ่มหรือยัง?",
        "play_kids": "เล่นสำหรับเด็ก",
        "copyright": "Mathopy © 2026 — สร้างด้วยสีเทียนเวทมนตร์",
        "feat1_title": "ตัวแก้เวทมนตร์",
        "feat1_desc": "ถ่ายรูปหรือพิมพ์โจทย์ ดูมันถูกแก้ราวกับเวทมนตร์!",
        "feat2_title": "ผู้สร้างศิลปะ",
        "feat2_desc": "เปลี่ยนสูตรคณิตศาสตร์ของคุณให้เป็นผลงานศิลปะที่มีสีสันสวยงาม",
        "feat3_title": "ควิซแสนสนุก",
        "feat3_desc": "ทดสอบสมองของคุณด้วยปริศนาที่ให้ความรู้สึกเหมือนวิดีโอเกม",
        "test1_name": "ครูแซม",
        "test1_text": "Mathopy ทำให้คณิตศาสตร์รู้สึกเหมือนเวลาเล่น! นักเรียนของฉันชอบมันมาก",
        "test2_name": "ลีโอ อายุ 8 ขวบ",
        "test2_text": "ฉันเคยเกลียดคณิตศาสตร์ แต่ตอนนี้ฉันชอบใช้ตัวเลขสร้างงานศิลปะ!",
        "test3_name": "ดร. เจน",
        "test3_text": "ความสมดุลที่สมบูรณ์แบบระหว่างการวิเคราะห์ระดับสูงและการเรียนรู้ที่สนุกสนาน"
      },
      "kids": {
        "backpack": "กระเป๋าเป้ของฉัน",
        "quote": "«เด็กทุกคนคือศิลปิน ปัญหาคือจะทำอย่างไรให้ยังคงเป็นศิลปินเมื่อเราโตขึ้น»"
      },
      "solver": {
        "header": "ตัวแก้คณิตศาสตร์เวทมนตร์",
        "sub_text": "ดูเวทมนตร์ปรากฏขึ้นเมื่อเราแก้ปัญหาของคุณไปด้วยกัน!",
        "logical_deduction": "คำอธิบายเวทมนตร์",
        "processing": "กำลังผสมสีและคณิตศาสตร์...",
        "placeholder": "พิมพ์โจทย์คณิตศาสตร์ของคุณที่นี่...",
        "analyzing": "กำลังวิเคราะห์...",
        "input_label": "พิมพ์โจทย์ของคุณ ดูเวทมนตร์เกิดขึ้น!"
      },
      "visualizer": {
        "header_kids": "ผู้สร้างศิลปะ",
        "placeholder_kids": "อธิบายภาพวาดเวทมนตร์ของคุณ... เช่น เกลียวรุ้งหลากสี!",
        "btn_kids": "สร้างภาพวาดเวทมนตร์!",
        "sidebar_kids": "รูปทรงเวทมนตร์",
        "badge_kids": "เวทมนตร์คณิตศาสตร์บริสุทธิ์!",
        "loading_kids": "กำลังผสมสีและคณิตศาสตร์...",
        "again_kids": "วาดใหม่!"
      },
      "practical": {
        "header_kids": "การจำลองสนามเด็กเล่น",
        "title_kids": "ดูคณิตศาสตร์ในการใช้งานจริง!",
        "placeholder_kids": "วันนี้เราควรสร้างอะไรกันดี?",
        "btn_kids": "เริ่ม!",
        "loading_kids": "กำลังสร้างโลกของคุณ...",
        "empty_kids": "พิมพ์บางอย่างด้านบนเพื่อเริ่ม!"
      },
      "practice": {
        "header_kids": "ได้เวลาควิซแสนสนุก!",
        "sub_kids": "ท้าทายสมองของคุณ",
        "badge_kids": "พร้อม? ระวัง! ไป!",
        "input_label_kids": "วันนี้เราจะเรียนอะไรกันดี?",
        "placeholder_kids": "หัวข้อเวทมนตร์คณิตศาสตร์...",
        "difficulty_kids": "ควรจะยากแค่ไหน?",
        "btn_kids": "เริ่มการผจญภัย!",
        "loading_kids": "กำลังสร้างเส้นทางเวทมนตร์...",
        "congrats_kids": "เย้! คุณทำได้แล้ว!",
        "score_kids": "คุณได้รับ {{score}} จาก {{total}} คะแนนเวทมนตร์!",
        "again_kids": "เล่นอีกครั้ง!"
      },
      "custom": {
        "header_kids": "บทเรียนของฉัน",
        "title_kids": "สร้างภารกิจของคุณเอง",
        "input_label_kids": "คุณต้องการเชี่ยวชาญอะไร?",
        "placeholder_kids": "เช่น: ฉันต้องการเรียนรู้เกี่ยวกับรูปทรงเวทมนตร์...",
        "past_kids": "ภารกิจที่ผ่านมา",
        "btn_kids": "สร้างภารกิจของฉัน!",
        "loading_btn_kids": "กำลังปรึกษาหนังสือเวทมนตร์...",
        "output_header_kids": "คัมภีร์ภารกิจ",
        "output_sub_kids": "เส้นทางของคุณ",
        "loading_text_kids": "กำลังวาดแผนที่นำทางของคุณ...",
        "empty_kids": "ภารกิจของคุณรออยู่!"
      },
      "nav": {
        "magic_solver": "ตัวแก้เวทมนตร์",
        "fun_quiz": "ควิซแสนสนุก",
        "playground": "สนามเด็กเล่น",
        "art_maker": "ผู้สร้างศิลปะ",
        "my_lessons": "บทเรียนของฉัน"
      },
      "footer": {
        "kids": "วาดด้วยมือด้วยความรักโดย Mathopy AI"
      }
    }
  },
  el: {
    translation: {
      "common": {
        "change_dimension": "Αλλαγή Διάστασης",
        "eye_comfort": "Άνεση Ματιών",
        "theme_toggle": "Αλλαγή Θέματος",
        "menu": "Μενού",
        "execute": "Εκτέλεση",
        "clear": "Καθαρισμός",
        "loading": "Φόρτωση...",
        "play_again": "Παίξτε Ξανά",
        "score": "Σκορ: {{score}}/{{total}}",
        "back": "Πίσω"
      },
      "age_selection": {
        "welcome": "ΚΑΛΩΣ ΗΡΘΑΤΕ ΣΤΟ MATHOPY",
        "choose_dimension": "Επιλέξτε τη μαθηματική σας διάσταση",
        "kids": "Λειτουργία για Παιδιά",
        "kids_sub": "Μαγεία & Κηρομπογιές"
      },
      "landing": {
        "features": "Χαρακτηριστικά",
        "how_works": "Πώς λειτουργεί",
        "play_now": "Παίξτε τώρα!",
        "hero_title": "Τα Μαθηματικά είναι <0>Μαγεία!</0>",
        "hero_subtitle": "Μπείτε σε έναν κόσμο όπου οι αριθμοί ζωντανεύουν! Λύστε γρίφους, χτίστε κόσμους και δημιουργήστε τέχνη με τη δύναμη του Mathopy.",
        "start_magic": "Ξεκινήστε τη Μαγεία",
        "unlock_brain": "Ξεκλειδώστε το μυαλό σας!",
        "cool_superpowers": "Κουλ Υπερδυνάμεις",
        "superpowers_sub": "Τι μπορείτε να κάνετε με το Mathopy;",
        "how_to_play": "Πώς να παίξετε;",
        "step1_title": "Επιλέξτε τη διάστασή σας",
        "step1_desc": "Επιλέξτε τη Λειτουργία για Παιδιά για μαγεία και όμορφη τέχνη με κηρομπογιές.",
        "step2_title": "Ρωτήστε τα πάντα!",
        "step2_desc": "Πληκτρολογήστε ένα πρόβλημα, μιλήστε στο AI ή σχεδιάστε ένα σχήμα στην οθόνη.",
        "step3_title": "Δημιουργήστε και Μοιραστείτε",
        "step3_desc": "Δείτε μαγικά σχέδια να εμφανίζονται ή λύστε δύσκολους γρίφους με ευκολία!",
        "ready_start": "Έτοιμοι να ξεκινήσετε;",
        "play_kids": "Παίξτε για παιδιά",
        "copyright": "Mathopy © 2026 — Φτιαγμένο με μαγικές κηρομπογιές",
        "feat1_title": "Μαγικός Επιλυτής",
        "feat1_desc": "Τραβήξτε μια φωτογραφία ή πληκτρολογήστε ένα πρόβλημα. Δείτε το να λύνεται σαν μαγεία!",
        "feat2_title": "Δημιουργός Τέχνης",
        "feat2_desc": "Μετατρέψτε τους μαθηματικούς σας τύπους σε πανέμορφα, χρωματιστά αριστουργήματα.",
        "feat3_title": "Διασκεδαστικό Κουίζ",
        "feat3_desc": "Δοκιμάστε το μυαλό σας με γρίφους που μοιάζουν με βιντεοπαιχνίδι.",
        "test1_name": "Δάσκαλος Σαμ",
        "test1_text": "Το Mathopy κάνει τα μαθηματικά να μοιάζουν με παιχνίδι! Οι μαθητές μου το λατρεύουν.",
        "test2_name": "Λέο, 8 ετών",
        "test2_text": "Κάποτε μισούσα τα μαθηματικά, αλλά τώρα λατρεύω να φτιάχνω τέχνη με αριθμούς!",
        "test3_name": "Δρ Τζέιν",
        "test3_text": "Η τέλεια ισορροπία μεταξύ υψηλού επιπέδου ανάλυσης και διασκεδαστικής μάθησης."
      },
      "kids": {
        "backpack": "Το σακίδιό μου",
        "quote": "«Κάθε παιδί είναι καλλιτέχνης. Το πρόβλημα είναι πώς να παραμείνουμε καλλιτέχνες μόλις μεγαλώσουμε»."
      },
      "solver": {
        "header": "Μαγικός Μαθηματικός Επιλυτής",
        "sub_text": "Δείτε τη μαγεία να ξετυλίγεται καθώς λύνουμε τα προβλήματά σας μαζί!",
        "logical_deduction": "Μαγική Εξήγηση",
        "processing": "Αναμειγνύουμε χρώματα και μαθηματικά...",
        "placeholder": "Πληκτρολογήστε το μαθηματικό σας πρόβλημα εδώ...",
        "analyzing": "Ανάλυση...",
        "input_label": "Πληκτρολογήστε το πρόβλημά σας. Δείτε τη μαγεία να συμβαίνει!"
      },
      "visualizer": {
        "header_kids": "Δημιουργός Τέχνης",
        "placeholder_kids": "Περιγράψτε το μαγικό σας σχέδιο... π.χ. μια πολύχρωμη σπείρα ουράνιου τόξου!",
        "btn_kids": "Δημιουργήστε μαγικό σχέδιο!",
        "sidebar_kids": "Μαγικά Σχήματα",
        "badge_kids": "Καθαρή Μαθηματική Μαγεία!",
        "loading_kids": "Αναμειγνύουμε χρώματα και μαθηματικά...",
        "again_kids": "Σχεδιάστε ξανά!"
      },
      "practical": {
        "header_kids": "Προσομοιώσεις Παιδικής Χαράς",
        "title_kids": "Δείτε τα Μαθηματικά σε Δράση!",
        "placeholder_kids": "Τι πρέπει να χτίσουμε σήμερα;",
        "btn_kids": "Εκκίνηση!",
        "loading_kids": "Χτίζουμε τον κόσμο σας...",
        "empty_kids": "Πληκτρολογήστε κάτι παραπάνω για να ξεκινήσετε!"
      },
      "practice": {
        "header_kids": "Ώρα για Διασκεδαστικό Κουίζ!",
        "sub_kids": "Προκαλέστε το μυαλό σας",
        "badge_kids": "Έτοιμοι; Πάμε!",
        "input_label_kids": "Τι μελετάμε σήμερα;",
        "placeholder_kids": "Θέμα μαγικών μαθηματικών...",
        "difficulty_kids": "Πόσο δύσκολο πρέπει να είναι;",
        "btn_kids": "Ξεκινήστε την Περιπέτεια!",
        "loading_kids": "Χτίζουμε μαγικά μονοπάτια...",
        "congrats_kids": "ΓΙΟΥΠΙ! ΤΑ ΚΑΤΑΦΕΡΑΤΕ!",
        "score_kids": "Κερδίσατε {{score}} από τους {{total}} μαγικούς πόντους!",
        "again_kids": "Παίξτε Ξανά!"
      },
      "custom": {
        "header_kids": "Τα μαθήματά μου",
        "title_kids": "Δημιουργήστε τη δική σας αποστολή",
        "input_label_kids": "Τι θέλετε να κατακτήσετε;",
        "placeholder_kids": "π.χ.: Θέλω να μάθω για τα μαγικά σχήματα...",
        "past_kids": "Παλιές Αποστολές",
        "btn_kids": "Δημιουργήστε την αποστολή μου!",
        "loading_btn_kids": "Συμβουλευόμαστε το μαγικό βιβλίο...",
        "output_header_kids": "Πάπυρος Αποστολής",
        "output_sub_kids": "Το μονοπάτι σας",
        "loading_text_kids": "Σχεδιάζουμε τον οδικό σας χάρτη...",
        "empty_kids": "Η αποστολή σας σας περιμένει!"
      },
      "nav": {
        "magic_solver": "Μαγικός Επιλυτής",
        "fun_quiz": "Διασκεδαστικό Κουίζ",
        "playground": "Παιδική Χαρά",
        "art_maker": "Δημιουργός Τέχνης",
        "my_lessons": "Τα μαθήματά μου"
      },
      "footer": {
        "kids": "Φτιαγμένο στο χέρι με αγάπη από το Mathopy AI"
      }
    }
  },
  cs: {
    translation: {
      "common": {
        "change_dimension": "Změnit Dimenzi",
        "eye_comfort": "Pohodlí pro Oči",
        "theme_toggle": "Přepnout Motiv",
        "menu": "Menu",
        "execute": "Spustit",
        "clear": "Vymazat",
        "loading": "Načítání...",
        "play_again": "Hrát znovu",
        "score": "Skóre: {{score}}/{{total}}",
        "back": "Zpět"
      },
      "age_selection": {
        "welcome": "VÍTEJTE V MATHOPY",
        "choose_dimension": "Vyberte si svou matematickou dimenzi",
        "kids": "Dětský Mód",
        "kids_sub": "Magie a Pastelky"
      },
      "landing": {
        "features": "Funkce",
        "how_works": "Jak to funguje",
        "play_now": "Hrát hned!",
        "hero_title": "Matematika je <0>Magie!</0>",
        "hero_subtitle": "Vstupte do světa, kde čísla ožívají! Řešte hádanky, budujte světy a tvořte umění díky síle Mathopy.",
        "start_magic": "Spustit Magii",
        "unlock_brain": "Odemkni svůj mozek!",
        "cool_superpowers": "Skvělé Supervlastnosti",
        "superpowers_sub": "Co můžeš s Mathopy dělat?",
        "how_to_play": "Jak hrát?",
        "step1_title": "Vyber si dimenzi",
        "step1_desc": "Vyber Dětský mód pro magii a krásné pastelkové umění.",
        "step2_title": "Ptej se na cokoliv!",
        "step2_desc": "Napiš příklad, mluv s AI nebo nakresli tvar na obrazovku.",
        "step3_title": "Tvoř a sdílej",
        "step3_desc": "Sleduj, jak se objevují magické kresby, nebo snadno řeš těžké hádanky!",
        "ready_start": "Připraven začít?",
        "play_kids": "Hrát pro děti",
        "copyright": "Mathopy © 2026 — Vyrobeno magickými pastelkami",
        "feat1_title": "Magický Řešitel",
        "feat1_desc": "Vyfoť nebo napiš příklad. Sleduj, jak se řeší jako mávnutím proutku!",
        "feat2_title": "Tvůrce Umění",
        "feat2_desc": "Změň své matematické vzorce v krásná, barevná veledíla.",
        "feat3_title": "Zábavný Kvíz",
        "feat3_desc": "Otestuj svůj mozek pomocí hádanek, které působí jako videohra.",
        "test1_name": "Učitel Sam",
        "test1_text": "Mathopy dělá z matematiky hru! Moji žáci to milují.",
        "test2_name": "Leo, 8 let",
        "test2_text": "Dřív jsem matematiku nesnášel, ale teď zbožňuju tvoření umění pomocí čísel!",
        "test3_name": "Dr. Jane",
        "test3_text": "Dokonalá rovnováha mezi hloubkovou analýzou a učením hrou."
      },
      "kids": {
        "backpack": "Můj batůžek",
        "quote": "«Každé dítě je umělec. Problém je, jak zůstat umělcem, když vyrosteme»."
      },
      "solver": {
        "header": "Magický Matematický Řešitel",
        "sub_text": "Sleduj, jak se magie rozvíjí, zatímco společně řešíme tvé problémy!",
        "logical_deduction": "Magické Vysvětlení",
        "processing": "Mícháme barvy a matematiku...",
        "placeholder": "Sem napiš svůj matematický problém...",
        "analyzing": "Analyzování...",
        "input_label": "Napiš svůj problém. Sleduj, jak se děje magie!"
      },
      "visualizer": {
        "header_kids": "Tvůrce Umění",
        "placeholder_kids": "Popiš svou magickou kresbu... například duhovou spirálu!",
        "btn_kids": "Vytvoř magickou kresbu!",
        "sidebar_kids": "Magické Tvary",
        "badge_kids": "Čistá matematická magie!",
        "loading_kids": "Mícháme barvy a matematiku...",
        "again_kids": "Kreslit znovu!"
      },
      "practical": {
        "header_kids": "Simulace na hřišti",
        "title_kids": "Sleduj matematiku v akci!",
        "placeholder_kids": "Co dnes postavíme?",
        "btn_kids": "Spustit!",
        "loading_kids": "Stavíme tvůj svět...",
        "empty_kids": "Napiš něco výše, abys mohl začít!"
      },
      "practice": {
        "header_kids": "Čas na zábavný kvíz!",
        "sub_kids": "Vyzvi svůj mozek",
        "badge_kids": "Připravit? Ke startu? POZOR! TEĎ!",
        "input_label_kids": "Co se dnes budeme učit?",
        "placeholder_kids": "Téma magické matematiky...",
        "difficulty_kids": "Jak těžké by to mělo být?",
        "btn_kids": "Spustit Dobrodružství!",
        "loading_kids": "Stavíme magické cesty...",
        "congrats_kids": "HURÁ! DOKÁZAL JSI TO!",
        "score_kids": "Získal jsi {{score}} z {{total}} magických bodů!",
        "again_kids": "Hrát znovu!"
      },
      "custom": {
        "header_kids": "Moje lekce",
        "title_kids": "Vytvoř si vlastní úkol",
        "input_label_kids": "Co chceš ovládnout?",
        "placeholder_kids": "např.: Chci se dozvědět o magických tvarech...",
        "past_kids": "Minulé úkoly",
        "btn_kids": "Vytvořit můj úkol!",
        "loading_btn_kids": "Nahlížíme do magické knihy...",
        "output_header_kids": "Svitky s úkolem",
        "output_sub_kids": "Tvá cesta",
        "loading_text_kids": "Kreslíme tvůj plán...",
        "empty_kids": "Tvůj úkol na tebe čeká!"
      },
      "nav": {
        "magic_solver": "Magický Řešitel",
        "fun_quiz": "Zábavný Kvíz",
        "playground": "Hřiště",
        "art_maker": "Tvůrce Umění",
        "my_lessons": "Moje lekce"
      },
      "footer": {
        "kids": "Ručně nakresleno s láskou od Mathopy AI"
      }
    }
  },
  ro: {
    translation: {
      "common": {
        "change_dimension": "Schimbă Dimensiunea",
        "eye_comfort": "Confort Ochi",
        "theme_toggle": "Schimbă Tema",
        "menu": "Meniu",
        "execute": "Execută",
        "clear": "Șterge",
        "loading": "Încărcare...",
        "play_again": "Joacă din nou",
        "score": "Scor: {{score}}/{{total}}",
        "back": "Înapoi"
      },
      "age_selection": {
        "welcome": "BINE AȚI VENIT LA MATHOPY",
        "choose_dimension": "Alege-ți dimensiunea matematică",
        "kids": "Mod Copii",
        "kids_sub": "Magie și Creioane"
      },
      "landing": {
        "features": "Caracteristici",
        "how_works": "Cum funcționează",
        "play_now": "Joacă acum!",
        "hero_title": "Matematica este <0>Magie!</0>",
        "hero_subtitle": "Pășește într-o lume în care numerele prind viață! Rezolvă puzzle-uri, construiește lumi și creează artă cu puterea Mathopy.",
        "start_magic": "Începe Magia",
        "unlock_brain": "Deblochează-ți creierul!",
        "cool_superpowers": "Superputeri Grozave",
        "superpowers_sub": "Ce poți face cu Mathopy?",
        "how_to_play": "Cum se joacă?",
        "step1_title": "Alege-ți dimensiunea",
        "step1_desc": "Alege Modul Copii pentru magie și artă frumoasă cu creioane.",
        "step2_title": "Întreabă orice!",
        "step2_desc": "Scrie o problemă, vorbește cu AI sau desenează o formă pe ecran.",
        "step3_title": "Creează și Distribuie",
        "step3_desc": "Vezi cum apar desene magice sau rezolvă puzzle-uri grele cu ușurință!",
        "ready_start": "Gata de start?",
        "play_kids": "Joacă pentru copii",
        "copyright": "Mathopy © 2026 — Creat cu creioane magice",
        "feat1_title": "Rezolvitor Magic",
        "feat1_desc": "Fă o poză sau scrie problema. Vezi cum se rezolvă ca prin magie!",
        "feat2_title": "Creator de Artă",
        "feat2_desc": "Transformă formulele tale matematice în capodopere frumoase și colorate.",
        "feat3_title": "Quiz Distractiv",
        "feat3_desc": "Testează-ți creierul cu puzzle-uri care par un joc video.",
        "test1_name": "Profesorul Sam",
        "test1_text": "Mathopy face matematica să pară o joacă! Elevii mei o adoră.",
        "test2_name": "Leo, 8 ani",
        "test2_text": "Înainte urâm matematica, dar acum ador să creez artă cu numere!",
        "test3_name": "Dr. Jane",
        "test3_text": "Echilibrul perfect între analiză de nivel înalt și învățare prin joc."
      },
      "kids": {
        "backpack": "Ghiozdanul meu",
        "quote": "«Fiecare copil este un artist. Problema este cum să rămânem artiști după ce creștem»."
      },
      "solver": {
        "header": "Rezolvitor de Matematică Magică",
        "sub_text": "Vezi cum se desfășoară magia în timp ce îți rezolvăm problemele împreună!",
        "logical_deduction": "Explicație Magică",
        "processing": "Amestecăm culorile și matematica...",
        "placeholder": "Scrie aici problema ta de matematică...",
        "analyzing": "Analizăm...",
        "input_label": "Scrie problema ta. Vezi cum se întâmplă magia!"
      },
      "visualizer": {
        "header_kids": "Creator de Artă",
        "placeholder_kids": "Descrie desenul tău magic... de exemplu, o spirală curcubeu!",
        "btn_kids": "Creează desen magic!",
        "sidebar_kids": "Forme Magice",
        "badge_kids": "Magie Matematică Pură!",
        "loading_kids": "Amestecăm culorile și matematica...",
        "again_kids": "Desenăm din nou!"
      },
      "practical": {
        "header_kids": "Simulări Loc de Joacă",
        "title_kids": "Vezi Matematica în Acțiune!",
        "placeholder_kids": "Ce ar trebui să construim azi?",
        "btn_kids": "Start!",
        "loading_kids": "Îți construim lumea...",
        "empty_kids": "Scrie ceva mai sus pentru a începe!"
      },
      "practice": {
        "header_kids": "Timpul pentru Quiz!",
        "sub_kids": "Provoacă-ți Creierul",
        "badge_kids": "Pregătit? Pe locuri! START!",
        "input_label_kids": "Ce studiem azi?",
        "placeholder_kids": "Subiect de magie matematică...",
        "difficulty_kids": "Cât de greu ar trebui să fie?",
        "btn_kids": "Începe Aventura!",
        "loading_kids": "Construim poteci magice...",
        "congrats_kids": "EVRIKA! AI REUȘIT!",
        "score_kids": "Ai obținut {{score}} din {{total}} puncte magice!",
        "again_kids": "Joacă din nou!"
      },
      "custom": {
        "header_kids": "Lecțiile mele",
        "title_kids": "Creează-ți propria misiune",
        "input_label_kids": "Ce vrei să stăpânești?",
        "placeholder_kids": "ex: Vreau să învăț despre formele magice...",
        "past_kids": "Misiuni trecute",
        "btn_kids": "Creează misiunea mea!",
        "loading_btn_kids": "Consultăm cartea magică...",
        "output_header_kids": "Păgubitul Misiunii",
        "output_sub_kids": "Calea Ta",
        "loading_text_kids": "Desenăm harta ta...",
        "empty_kids": "Misiunea ta te așteaptă!"
      },
      "nav": {
        "magic_solver": "Rezolvitor Magic",
        "fun_quiz": "Quiz Distractiv",
        "playground": "Loc de Joacă",
        "art_maker": "Creator de Artă",
        "my_lessons": "Lecțiile mele"
      },
      "footer": {
        "kids": "Desenat de mână cu dragoste de Mathopy AI"
      }
    }
  },
  hu: {
    translation: {
      "common": {
        "change_dimension": "Dimenzió Váltása",
        "eye_comfort": "Szemkímélő Mód",
        "theme_toggle": "Téma Váltása",
        "menu": "Menü",
        "execute": "Futtatás",
        "clear": "Törlés",
        "loading": "Betöltés...",
        "play_again": "Játék Újra",
        "score": "Pontszám: {{score}}/{{total}}",
        "back": "Vissza"
      },
      "age_selection": {
        "welcome": "ÜDVÖZÖLÜNK A MATHOPY-BAN",
        "choose_dimension": "Válaszd ki a matematikai dimenziódat",
        "kids": "Gyerek Mód",
        "kids_sub": "Mágia és Színes Kréta"
      },
      "landing": {
        "features": "Jellemzők",
        "how_works": "Hogyan működik",
        "play_now": "Játssz most!",
        "hero_title": "A matek <0>Mágia!</0>",
        "hero_subtitle": "Lépj be egy világba, ahol a számok életre kelnek! Oldj meg rejtvényeket, építs világokat és alkoss művészetet a Mathopy erejével.",
        "start_magic": "Mágia Indítása",
        "unlock_brain": "Szabadítsd fel az agyad!",
        "cool_superpowers": "Szupererők",
        "superpowers_sub": "Mit tehetsz a Mathopy-val?",
        "how_to_play": "Hogyan kell játszani?",
        "step1_title": "Válaszd ki a dimenziódat",
        "step1_desc": "Válaszd a Gyerek Módot a mágiához és a szép krétarajzokhoz.",
        "step2_title": "Kérdezz bármit!",
        "step2_desc": "Írj be egy problémát, beszélj az AI-val, vagy rajzolj egy alakzatot a képernyőre.",
        "step3_title": "Alkoss és Oszd meg",
        "step3_desc": "Nézd, ahogy mágikus rajzok jelennek meg, vagy oldj meg nehéz rejtvényeket könnyedén!",
        "ready_start": "Készen állsz a kezdésre?",
        "play_kids": "Játék gyerekeknek",
        "copyright": "Mathopy © 2026 — Mágikus krétával készült",
        "feat1_title": "Mágikus Megoldó",
        "feat1_desc": "Készíts egy fotót vagy írj be egy példát. Nézd, ahogy varázsütésre megoldódik!",
        "feat2_title": "Művész",
        "feat2_desc": "Változtasd matematikai képleteidet gyönyörű, színes remekművekké.",
        "feat3_title": "Vicces Kvíz",
        "feat3_desc": "Teszteld az agyad olyan rejtvényekkel, amik olyanok, mint egy videojáték.",
        "test1_name": "Sam tanár úr",
        "test1_text": "A Mathopy-val a matek olyan, mint a játékidő! A diákjaim imádják.",
        "test2_name": "Leo, 8 éves",
        "test2_text": "Régebben utáltam a matekot, de most már imádok művészetet alkotni a számokkal!",
        "test3_name": "Dr. Jane",
        "test3_text": "Tökéletes egyensúly a magas szintű elemzés és a játékos tanulás között."
      },
      "kids": {
        "backpack": "Hátizsákom",
        "quote": "«Minden gyermek művész. A probléma az, hogyan maradjunk művészek, amint felnövünk»."
      },
      "solver": {
        "header": "Mágikus Matematikai Megoldó",
        "sub_text": "Nézd, ahogy a mágia kibontakozik, miközben együtt megoldjuk a problémáidat!",
        "logical_deduction": "Mágikus Magyarázat",
        "processing": "Színek és matematika keverése...",
        "placeholder": "Írd ide a matematikai problémádat...",
        "analyzing": "Elemzés...",
        "input_label": "Írd be a problémádat. Nézd, ahogy történik a varázslat!"
      },
      "visualizer": {
        "header_kids": "Művész",
        "placeholder_kids": "Írd le a mágikus rajzodat... például egy szivárványos spirált!",
        "btn_kids": "Mágikus rajz készítése!",
        "sidebar_kids": "Mágikus Alakzatok",
        "badge_kids": "Tiszta Matematikai Mágia!",
        "loading_kids": "Színek és matematika keverése...",
        "again_kids": "Rajzolás újra!"
      },
      "practical": {
        "header_kids": "Játszótér Szimulációk",
        "title_kids": "Nézd a matematikát akció közben!",
        "placeholder_kids": "Mit építsünk ma?",
        "btn_kids": "Indítás!",
        "loading_kids": "A világod építése...",
        "empty_kids": "Írj be valamit fent a kezdéshez!"
      },
      "practice": {
        "header_kids": "Vicces Kvízidő!",
        "sub_kids": "Hívd ki az agyadat",
        "badge_kids": "Vigyázz! Kész! RAJT!",
        "input_label_kids": "Mit tanulunk ma?",
        "placeholder_kids": "Mágikus matek téma...",
        "difficulty_kids": "Milyen nehéz legyen?",
        "btn_kids": "Kaland Indítása!",
        "loading_kids": "Mágikus utak építése...",
        "congrats_kids": "HURRÁ! MEGCSINÁLTAD!",
        "score_kids": "{{score}} pontot értél el a {{total}} mágikus pontból!",
        "again_kids": "Játék Újra!"
      },
      "custom": {
        "header_kids": "Leckéim",
        "title_kids": "Készítsd el saját küldetésedet",
        "input_label_kids": "Mit szeretnél elsajátítani?",
        "placeholder_kids": "pl.: Szeretnék tanulni a mágikus alakzatokról...",
        "past_kids": "Korábbi küldetések",
        "btn_kids": "Küldetés készítése!",
        "loading_btn_kids": "A mágikus könyvet tanulmányozzuk...",
        "output_header_kids": "Küldetés Tekercs",
        "output_sub_kids": "A te utad",
        "loading_text_kids": "Az útiterved rajzolása...",
        "empty_kids": "A küldetésed vár rád!"
      },
      "nav": {
        "magic_solver": "Mágikus Megoldó",
        "fun_quiz": "Vicces Kvíz",
        "playground": "Játszótér",
        "art_maker": "Művész",
        "my_lessons": "Leckéim"
      },
      "footer": {
        "kids": "Szeretettel kézzel rajzolva a Mathopy AI által"
      }
    }
  },
  sv: {
    translation: {
      "common": {
        "change_dimension": "Ändra Dimension",
        "eye_comfort": "Ögonkomfort",
        "theme_toggle": "Växla Tema",
        "menu": "Meny",
        "execute": "Kör",
        "clear": "Rensa",
        "loading": "Laddar...",
        "play_again": "Spela igen",
        "score": "Poäng: {{score}}/{{total}}",
        "back": "Tillbaka"
      },
      "age_selection": {
        "welcome": "VÄLKOMMEN TILL MATHOPY",
        "choose_dimension": "Välj din matematiska dimension",
        "kids": "Barnläge",
        "kids_sub": "Magi & Kritor"
      },
      "landing": {
        "features": "Funktioner",
        "how_works": "Hur det fungerar",
        "play_now": "Spela nu!",
        "hero_title": "Matte är <0>Magi!</0>",
        "hero_subtitle": "Kliv in i en värld där siffror får liv! Lös pussel, bygg världar och skapa konst med kraften från Mathopy.",
        "start_magic": "Starta Magin",
        "unlock_brain": "Lås upp din hjärna!",
        "cool_superpowers": "Coola Superkrafter",
        "superpowers_sub": "Vad kan du göra med Mathopy?",
        "how_to_play": "Hur spelar man?",
        "step1_title": "Välj din dimension",
        "step1_desc": "Välj Barnläge för magi och vacker kritkonst.",
        "step2_title": "Fråga vad som helst!",
        "step2_desc": "Skriv ett problem, prata med AI eller rita en form på skärmen.",
        "step3_title": "Skapa och Dela",
        "step3_desc": "Se magiska ritningar dyka upp eller lös svåra pussel med lätthet!",
        "ready_start": "Redo att börja?",
        "play_kids": "Spela för barn",
        "copyright": "Mathopy © 2026 — Skapat med magiska kritor",
        "feat1_title": "Magisk Lösare",
        "feat1_desc": "Ta ett foto eller skriv in ett problem. Se det lösas som genom magi!",
        "feat2_title": "Konstskapare",
        "feat2_desc": "Förvandla dina matematikformler till vackra, färgglada mästerverk.",
        "feat3_title": "Roligt Quiz",
        "feat3_desc": "Testa din hjärna med pussel som känns som ett videospel.",
        "test1_name": "Lärare Sam",
        "test1_text": "Mathopy får matte att kännas som lekstund! Mina elever älskar det.",
        "test2_name": "Leo, 8 år",
        "test2_text": "Förut hatade jag matte, men nu älskar jag att skapa konst med siffror!",
        "test3_name": "Dr. Jane",
        "test3_text": "Den perfekta balansen mellan djupanalys och lekfullt lärande."
      },
      "kids": {
        "backpack": "Min ryggsäck",
        "quote": "«Varje barn är en konstnär. Problemet är hur man förblir en konstnär när vi växer upp»."
      },
      "solver": {
        "header": "Magisk Mattelösare",
        "sub_text": "Se magin uppenbara sig när vi löser dina problem tillsammans!",
        "logical_deduction": "Magisk Förklaring",
        "processing": "Blandar färger och matematik...",
        "placeholder": "Skriv ditt matteproblem här...",
        "analyzing": "Analyserar...",
        "input_label": "Skriv ditt problem. Se magin hända!"
      },
      "visualizer": {
        "header_kids": "Konstskapare",
        "placeholder_kids": "Beskriv din magiska ritning... till exempel en regnbågsspiral!",
        "btn_kids": "Skapa magisk ritning!",
        "sidebar_kids": "Magiska Former",
        "badge_kids": "Ren Mattemagi!",
        "loading_kids": "Blandar färger och matematik...",
        "again_kids": "Rita igen!"
      },
      "practical": {
        "header_kids": "Lekplatssimuleringar",
        "title_kids": "Se Matte i Action!",
        "placeholder_kids": "Vad ska we bygga idag?",
        "btn_kids": "Starta!",
        "loading_kids": "Bygger din värld...",
        "empty_kids": "Skriv något ovan för att börja!"
      },
      "practice": {
        "header_kids": "Dags för roligt quiz!",
        "sub_kids": "Utmana din hjärna",
        "badge_kids": "Klara? Färdiga? GÅ!",
        "input_label_kids": "Vad studerar vi idag?",
        "placeholder_kids": "Mattemagi-ämne...",
        "difficulty_kids": "Hur svårt ska det vara?",
        "btn_kids": "Starta Äventyret!",
        "loading_kids": "Bygger magiska vägar...",
        "congrats_kids": "YAY! DU GJORDE DET!",
        "score_kids": "Du fick {{score}} av {{total}} magiska poäng!",
        "again_kids": "Spela igen!"
      },
      "custom": {
        "header_kids": "Mina lektioner",
        "title_kids": "Skapa ditt eget uppdrag",
        "input_label_kids": "Vad vill du bemästra?",
        "placeholder_kids": "t.ex.: Jag vill lära mig om magiska former...",
        "past_kids": "Tidigare uppdrag",
        "btn_kids": "Skapa mitt uppdrag!",
        "loading_btn_kids": "Konsulterar den magiska boken...",
        "output_header_kids": "Uppdragsskriftrulle",
        "output_sub_kids": "Din väg",
        "loading_text_kids": "Ritar din färdplan...",
        "empty_kids": "Ditt uppdrag väntar!"
      },
      "nav": {
        "magic_solver": "Magisk Lösare",
        "fun_quiz": "Roligt Quiz",
        "playground": "Lekplats",
        "art_maker": "Konstskapare",
        "my_lessons": "Mina lektioner"
      },
      "footer": {
        "kids": "Handritat med kärlek av Mathopy AI"
      }
    }
  },
  id: {
    translation: {
      "common": {
        "change_dimension": "Ubah Dimensi",
        "eye_comfort": "Kenyamanan Mata",
        "theme_toggle": "Ganti Tema",
        "menu": "Menu",
        "execute": "Jalankan",
        "clear": "Bersihkan",
        "loading": "Memuat...",
        "play_again": "Main Lagi",
        "score": "Skor: {{score}}/{{total}}",
        "back": "Kembali"
      },
      "age_selection": {
        "welcome": "SELAMAT DATANG DI MATHOPY",
        "choose_dimension": "Pilih dimensi matematikamu",
        "kids": "Mode Anak",
        "kids_sub": "Sihir & Krayon"
      },
      "landing": {
        "features": "Fitur",
        "how_works": "Cara Kerja",
        "play_now": "Main Sekarang!",
        "hero_title": "Matematika itu <0>Ajaib!</0>",
        "hero_subtitle": "Masuki dunia di mana angka menjadi hidup! Pecahkan teka-teki, bangun dunia, dan buat seni dengan kekuatan Mathopy.",
        "start_magic": "Mulai Keajaiban",
        "unlock_brain": "Buka potensi otakmu!",
        "cool_superpowers": "Kekuatan Super Keren",
        "superpowers_sub": "Apa yang bisa kamu lakukan dengan Mathopy?",
        "how_to_play": "Cara Bermain?",
        "step1_title": "Pilih Dimensimu",
        "step1_desc": "Pilih Mode Anak untuk keajaiban dan seni krayon yang indah.",
        "step2_title": "Tanya Apa Saja!",
        "step2_desc": "Ketik masalah, bicaralah dengan AI, atau gambar bentuk di layar.",
        "step3_title": "Buat dan Bagikan",
        "step3_desc": "Lihat gambar ajaib muncul atau pecahkan teka-teki sulit dengan mudah!",
        "ready_start": "Siap untuk memulai?",
        "play_kids": "Mainkan untuk Anak-anak",
        "copyright": "Mathopy © 2026 — Dibuat dengan krayon ajaib",
        "feat1_title": "Pemecah Ajaib",
        "feat1_desc": "Ambil foto atau ketik masalah. Lihat masalah terpecahkan seperti sihir!",
        "feat2_title": "Pembuat Seni",
        "feat2_desc": "Ubah rumus matematikamu menjadi mahakarya yang indah dan penuh warna.",
        "feat3_title": "Kuis Seru",
        "feat3_desc": "Uji otakmu dengan teka-teki yang terasa seperti video game.",
        "test1_name": "Guru Sam",
        "test1_text": "Mathopy membuat matematika terasa seperti waktu bermain! Murid-muridku sangat menyukainya.",
        "test2_name": "Leo, 8 tahun",
        "test2_text": "Dulu aku benci matematika, tapi sekarang aku suka membuat seni dengan angka!",
        "test3_name": "Dr. Jane",
        "test3_text": "Keseimbangan sempurna antara analisis tingkat tinggi dan pembelajaran yang menyenangkan."
      },
      "kids": {
        "backpack": "Ransel Saya",
        "quote": "«Setiap anak adalah seniman. Masalahnya adalah bagaimana tetap menjadi seniman setelah kita dewasa»."
      },
      "solver": {
        "header": "Pemecah Matematika Ajaib",
        "sub_text": "Lihat keajaiban terungkap saat kita menyelesaikan masalahmu bersama!",
        "logical_deduction": "Penjelasan Ajaib",
        "processing": "Mencampur warna dan matematika...",
        "placeholder": "Ketik masalah matematikamu di sini...",
        "analyzing": "Menganalisis...",
        "input_label": "Ketik masalahmu. Lihat sihir terjadi!"
      },
      "visualizer": {
        "header_kids": "Pembuat Seni",
        "placeholder_kids": "Jelaskan gambar ajaibmu... misalnya spiral pelangi berwarna-warni!",
        "btn_kids": "Buat Gambar Ajaib!",
        "sidebar_kids": "Bentuk Ajaib",
        "badge_kids": "Sihir Matematika Murni!",
        "loading_kids": "Mencampur warna dan matematika...",
        "again_kids": "Gambar Lagi!"
      },
      "practical": {
        "header_kids": "Simulasi Taman Bermain",
        "title_kids": "Lihat Matematika dalam Beraksi!",
        "placeholder_kids": "Apa yang harus kita bangun hari ini?",
        "btn_kids": "Mulai!",
        "loading_kids": "Membangun duniamu...",
        "empty_kids": "Ketik sesuatu di atas untuk memulai!"
      },
      "practice": {
        "header_kids": "Waktunya Kuis Seru!",
        "sub_kids": "Tantang Otakmu",
        "badge_kids": "Siap? Sedia? MULAI!",
        "input_label_kids": "Apa yang kita pelajari hari ini?",
        "placeholder_kids": "Topik sihir matematika...",
        "difficulty_kids": "Seberapa sulit seharusnya?",
        "btn_kids": "Mulai Petualangan!",
        "loading_kids": "Membangun jalan ajaib...",
        "congrats_kids": "YAY! KAMU BERHASIL!",
        "score_kids": "Kamu mendapatkan {{score}} dari {{total}} poin ajaib!",
        "again_kids": "Main Lagi!"
      },
      "custom": {
        "header_kids": "Pelajaran Saya",
        "title_kids": "Buat Quest Kamu Sendiri",
        "input_label_kids": "Apa yang ingin kamu kuasai?",
        "placeholder_kids": "misalnya: Saya ingin belajar tentang bentuk ajaib...",
        "past_kids": "Quest Sebelumnya",
        "btn_kids": "Buat Quest Saya!",
        "loading_btn_kids": "Konsultasi dengan buku ajaib...",
        "output_header_kids": "Gulungan Quest",
        "output_sub_kids": "Jalanmu",
        "loading_text_kids": "Menggambar peta jalanmu...",
        "empty_kids": "Quest kamu sedang menunggu!"
      },
      "nav": {
        "magic_solver": "Pemecah Ajaib",
        "fun_quiz": "Kuis Seru",
        "playground": "Taman Bermain",
        "art_maker": "Pembuat Seni",
        "my_lessons": "Pelajaran Saya"
      },
      "footer": {
        "kids": "Digambar tangan dengan cinta oleh Mathopy AI"
      }
    }
  },
  ms: {
    translation: {
      "common": {
        "change_dimension": "Tukar Dimensi",
        "eye_comfort": "Keselesaan Mata",
        "theme_toggle": "Tukar Tema",
        "menu": "Menu",
        "execute": "Laksanakan",
        "clear": "Padam",
        "loading": "Memuatkan...",
        "play_again": "Main Semula",
        "score": "Skor: {{score}}/{{total}}",
        "back": "Kembali"
      },
      "age_selection": {
        "welcome": "SELAMAT DATANG KE MATHOPY",
        "choose_dimension": "Pilih dimensi matematik anda",
        "kids": "Mod Kanak-kanak",
        "kids_sub": "Sihir & Krayon"
      },
      "landing": {
        "features": "Ciri-ciri",
        "how_works": "Cara Ia Berfungsi",
        "play_now": "Main Sekarang!",
        "hero_title": "Matematik adalah <0>Sihir!</0>",
        "hero_subtitle": "Masuki dunia di mana angka menjadi hidup! Selesaikan teka-teki, bina dunia, dan cipta seni dengan kuasa Mathopy.",
        "start_magic": "Mula Sihir",
        "unlock_brain": "Buka kunci otak anda!",
        "cool_superpowers": "Kuasa Super Hebat",
        "superpowers_sub": "Apa yang anda boleh lakukan dengan Mathopy?",
        "how_to_play": "Bagaimana cara bermain?",
        "step1_title": "Pilih Dimensi Anda",
        "step1_desc": "Pilih Mod Kanak-kanak untuk sihir dan seni krayon yang cantik.",
        "step2_title": "Tanya Apa Sahaja!",
        "step2_desc": "Taip masalah, bercakap dengan AI, atau lukis bentuk pada skrin.",
        "step3_title": "Cipta dan Kongsi",
        "step3_desc": "Lihat lukisan sihir muncul atau selesaikan teka-teki sukar dengan mudah!",
        "ready_start": "Sedia untuk bermula?",
        "play_kids": "Main untuk Kanak-kanak",
        "copyright": "Mathopy © 2026 — Dibuat dengan krayon sihir",
        "feat1_title": "Penyelesai Sihir",
        "feat1_desc": "Ambil foto atau taip masalah. Lihat ia diselesaikan seperti sihir!",
        "feat2_title": "Pencipta Seni",
        "feat2_desc": "Tukarkan formula matematik anda menjadi karya seni yang indah dan berwarna-warni.",
        "feat3_title": "Kuiz Seronok",
        "feat3_desc": "Uji otak anda dengan teka-teki yang terasa seperti permainan video.",
        "test1_name": "Cikgu Sam",
        "test1_text": "Mathopy membuatkan matematik terasa seperti waktu bermain! Pelajar saya sangat menyukainya.",
        "test2_name": "Leo, 8 tahun",
        "test2_text": "Dahulu saya benci matematik, tapi sekarang saya suka mencipta seni dengan angka!",
        "test3_name": "Dr. Jane",
        "test3_text": "Keseimbangan sempurna antara analisis tahap tinggi dan pembelajaran yang menyeronokkan."
      },
      "kids": {
        "backpack": "Beg Galas Saya",
        "quote": "«Setiap kanak-kanak adalah artis. Masalahnya adalah bagaimana untuk kekal sebagai artis selepas kita dewasa»."
      },
      "solver": {
        "header": "Penyelesai Matematik Sihir",
        "sub_text": "Lihat sihir berlaku semasa kita menyelesaikan masalah anda bersama-sama!",
        "logical_deduction": "Penjelasan Sihir",
        "processing": "Mencampur warna dan matematik...",
        "placeholder": "Taip masalah matematik anda di sini...",
        "analyzing": "Menganalisis...",
        "input_label": "Taip masalah anda. Lihat sihir berlaku!"
      },
      "visualizer": {
        "header_kids": "Pencipta Seni",
        "placeholder_kids": "Terangkan lukisan sihir anda... contohnya lingkaran pelangi berwarna-warni!",
        "btn_kids": "Buat Lukisan Sihir!",
        "sidebar_kids": "Bentuk Sihir",
        "badge_kids": "Sihir Matematika Tulen!",
        "loading_kids": "Mencampur warna dan matematik...",
        "again_kids": "Lukis Lagi!"
      },
      "practical": {
        "header_kids": "Simulasi Taman Permainan",
        "title_kids": "Lihat Matematika dalam Tindakan!",
        "placeholder_kids": "Apa yang kita patut bina hari ini?",
        "btn_kids": "Mula!",
        "loading_kids": "Membina dunia anda...",
        "empty_kids": "Taip sesuatu di atas untuk bermula!"
      },
      "practice": {
        "header_kids": "Masa Kuiz Seronok!",
        "sub_kids": "Cabar Otak Anda",
        "badge_kids": "Sedia? Sedia? MULA!",
        "input_label_kids": "Apa yang kita pelajari hari ini?",
        "placeholder_kids": "Topik sihir matematik...",
        "difficulty_kids": "Betapa sukarkah ia?",
        "btn_kids": "Mulakan Pengembaraan!",
        "loading_kids": "Membina laluan sihir...",
        "congrats_kids": "YAY! ANDA BERJAYA!",
        "score_kids": "Anda mendapat {{score}} daripada {{total}} mata sihir!",
        "again_kids": "Main Lagi!"
      },
      "custom": {
        "header_kids": "Pelajaran Saya",
        "title_kids": "Cipta Quest Anda Sendiri",
        "input_label_kids": "Apa yang anda mahu kuasai?",
        "placeholder_kids": "cth: Saya mahu belajar tentang bentuk sihir...",
        "past_kids": "Quest Terdahulu",
        "btn_kids": "Cipta Quest Saya!",
        "loading_btn_kids": "Merujuk buku sihir...",
        "output_header_kids": "Skrol Quest",
        "output_sub_kids": "Laluan Anda",
        "loading_text_kids": "Melukis peta jalan anda...",
        "empty_kids": "Quest anda sedang menunggu!"
      },
      "nav": {
        "magic_solver": "Penyelesai Sihir",
        "fun_quiz": "Kuiz Seronok",
        "playground": "Tempat Permainan",
        "art_maker": "Pencipta Seni",
        "my_lessons": "Pelajaran Saya"
      },
      "footer": {
        "kids": "Dilukis tangan dengan kasih sayang oleh Mathopy AI"
      }
    }
  },
  fa: {
    translation: {
      "common": {
        "change_dimension": "تغییر بعد",
        "eye_comfort": "راحتی چشم",
        "theme_toggle": "تغییر تم",
        "menu": "منو",
        "execute": "اجرا",
        "clear": "پاک کردن",
        "loading": "در حال بارگذاری...",
        "play_again": "بازی دوباره",
        "score": "امتیاز: {{score}}/{{total}}",
        "back": "بازگشت"
      },
      "age_selection": {
        "welcome": "به MATHOPY خوش آمدید",
        "choose_dimension": "بعد ریاضی خود را انتخاب کنید",
        "kids": "حالت کودک",
        "kids_sub": "جادو و پاستل"
      },
      "landing": {
        "features": "ویژگی‌ها",
        "how_works": "چگونه کار می‌کند",
        "play_now": "حالا بازی کن!",
        "hero_title": "ریاضی <0>جادو است!</0>",
        "hero_subtitle": "به دنیایی قدم بگذارید که اعداد در آن زنده می‌شوند! معماها را حل کنید، دنیاها را بسازید و با قدرت مایتوپی هنر خلق کنید.",
        "start_magic": "شروع جادو",
        "unlock_brain": "مغزت را آزاد کن!",
        "cool_superpowers": "ابرخدمات جالب",
        "superpowers_sub": "با مایتوپی چه کارهایی می‌توانید انجام دهید؟",
        "how_to_play": "چگونه بازی کنیم؟",
        "step1_title": "بعد خود را انتخاب کنید",
        "step1_desc": "حالت کودکان را برای جادو و هنرهای زیبای پاستلی انتخاب کنید.",
        "step2_title": "هر چیزی بپرسید!",
        "step2_desc": "یک مسئله تایپ کنید، با هوش مصنوعی صحبت کنید یا شکلی روی صفحه بکشید.",
        "step3_title": "خلق کنید و به اشتراک بگذارید",
        "step3_desc": "ببینید چگونه نقاشی‌های جادویی ظاهر می‌شوند یا معماهای سخت را به سادگی حل کنید!",
        "ready_start": "آماده شروع هستید؟",
        "play_kids": "بازی برای کودکان",
        "copyright": "مایتوپی © ۲۰۲۶ — ساخته شده با پاستل‌های جادویی",
        "feat1_title": "حل‌کننده جادویی",
        "feat1_desc": "عکس بگیرید یا مسئله را تایپ کنید. ببینید چگونه مثل جادو حل می‌شود!",
        "feat2_title": "هنر ساز",
        "feat2_desc": "فرمول‌های ریاضی خود را به شاهکارهای زیبا و رنگارنگ تبدیل کنید.",
        "feat3_title": "کوییز سرگرم‌کننده",
        "feat3_desc": "مغز خود را با معماهایی که حس بازی ویدیویی دارند به چالش بکشید.",
        "test1_name": "آقا معلم سام",
        "test1_text": "مایتوپی ریاضی را به زمان بازی تبدیل می‌کند! دانش‌آموزانم عاشقش هستند.",
        "test2_name": "لئو، ۸ ساله",
        "test2_text": "قبلاً از ریاضی متنفر بودم، اما الان عاشق خلق هنر با اعداد هستم!",
        "test3_name": "دکتر جین",
        "test3_text": "تعادلی عالی بین تحلیل سطح بالا و یادگیری بازی‌گونه."
      },
      "kids": {
        "backpack": "کوله پشتی من",
        "quote": "«هر کودکی یک هنرمند است. مسئله این است که چگونه وقتی بزرگ شدیم، هنرمند بمانیم»."
      },
      "solver": {
        "header": "حل‌کننده ریاضی جادویی",
        "sub_text": "ببینید جادو چگونه آشکار می‌شود در حالی که مسائل شما را با هم حل می‌کنیم!",
        "logical_deduction": "توضیح جادویی",
        "processing": "ترکیب رنگ‌ها و ریاضی...",
        "placeholder": "مسئله ریاضی خود را اینجا تایپ کنید...",
        "analyzing": "در حال تحلیل...",
        "input_label": "مسئله خود را تایپ کنید. جادو را تماشا کنید!"
      },
      "visualizer": {
        "header_kids": "هنر ساز",
        "placeholder_kids": "نقاشی جادویی خود را توصیف کنید... مثلاً یک مارپیچ رنگین‌کمانی!",
        "btn_kids": "نقاشی جادویی بکش!",
        "sidebar_kids": " شکلهای جادویی",
        "badge_kids": "جادوی خالص ریاضی!",
        "loading_kids": "ترکیب رنگ‌ها و ریاضی...",
        "again_kids": "دوباره بکش!"
      },
      "practical": {
        "header_kids": "شبیه‌سازی‌های شهربازی",
        "title_kids": "ریاضی را در عمل ببینید!",
        "placeholder_kids": "امروز چه چیزی بسازیم؟",
        "btn_kids": "شروع!",
        "loading_kids": "در حال ساختن دنیای شما...",
        "empty_kids": "برای شروع چیزی تایپ کنید!"
      },
      "practice": {
        "header_kids": "زمان کوییز سرگرم‌کننده!",
        "sub_kids": "مغزت را به چالش بکش",
        "badge_kids": "حاضر؟ آماده؟ برو!",
        "input_label_kids": "امروز چه چیزی مطالعه می‌کنیم؟",
        "placeholder_kids": "موضوع جادوی ریاضی...",
        "difficulty_kids": "چقدر سخت باشد؟",
        "btn_kids": "شروع ماجراجویی!",
        "loading_kids": "در حال ساختن مسیرهای جادویی...",
        "congrats_kids": "هورا! تو موفق شدی!",
        "score_kids": "تو {{score}} از {{total}} امتیاز جادویی را گرفتی!",
        "again_kids": "دوباره بازی کن!"
      },
      "custom": {
        "header_kids": "درس‌های من",
        "title_kids": "ماموریت خود را بساز",
        "input_label_kids": "می‌خواهی در چه چیزی استاد شوی؟",
        "placeholder_kids": "مثلاً: می‌خواهم در مورد شکلهای جادویی یاد بگیرم...",
        "past_kids": "ماموریت‌های قبلی",
        "btn_kids": "ماموریت مرا بساز!",
        "loading_btn_kids": "در حال مشورت با کتاب جادویی...",
        "output_header_kids": "طومار ماموریت",
        "output_sub_kids": "مسیر تو",
        "loading_text_kids": "در حال کشیدن نقشه راه تو...",
        "empty_kids": "ماموریت تو در انتظار است!"
      },
      "nav": {
        "magic_solver": "حل‌کننده جادویی",
        "fun_quiz": "کوییز سرگرم‌کننده",
        "playground": "شهربازی",
        "art_maker": "هنر ساز",
        "my_lessons": "درس‌های من"
      },
      "footer": {
        "kids": "با عشق و با دست توسط هوش مصنوعی مایتوپی کشیده شده"
      }
    }
  },
  he: {
    translation: {
      "common": {
        "change_dimension": "שינוי מימד",
        "eye_comfort": "נוחות עיניים",
        "theme_toggle": "שינוי ערכת נושא",
        "menu": "תפריט",
        "execute": "בצע",
        "clear": "נקה",
        "loading": "טוען...",
        "play_again": "שחק שוב",
        "score": "ציון: {{score}}/{{total}}",
        "back": "חזור"
      },
      "age_selection": {
        "welcome": "ברוכים הבאים ל-MATHOPY",
        "choose_dimension": "בחר את המימד המתמטי שלך",
        "kids": "מצב ילדים",
        "kids_sub": "קסם וצבעים"
      },
      "landing": {
        "features": "תכונות",
        "how_works": "איך זה עובד",
        "play_now": "שחקו עכשיו!",
        "hero_title": "מתמטיקה היא <0>קסם!</0>",
        "hero_subtitle": "היכנסו לעולם שבו המספרים מתעוררים לחיים! פתרו חידות, בנו עולמות וצרו אמנות עם הכוח של Mathopy.",
        "start_magic": "התחילו את הקסם",
        "unlock_brain": "שחררו את המוח שלכם!",
        "cool_superpowers": "כוחות על מגניבים",
        "superpowers_sub": "מה אתם יכולים לעשות עם Mathopy?",
        "how_to_play": "איך משחקים?",
        "step1_title": "בחרו את המימד שלכם",
        "step1_desc": "בחרו במצב ילדים עבור קסם ואמנות גיר יפהפייה.",
        "step2_title": "שאלו כל דבר!",
        "step2_desc": "הקלידו בעיה, דברו עם ה-AI או ציירו צורה על המסך.",
        "step3_title": "צרו ושתפו",
        "step3_desc": "ראו ציורים קסומים מופיעים או פתרו חידות קשות בקלות!",
        "ready_start": "מוכנים להתחיל?",
        "play_kids": "משחק לילדים",
        "copyright": "Mathopy © 2026 — נוצר עם גירים קסומים",
        "feat1_title": "פתרון קסמים",
        "feat1_desc": "צלמו תמונה או הקלידו בעיה. ראו אותה נפתרת כמו בקסם!",
        "feat2_title": "יוצר אמנות",
        "feat2_desc": "הפכו את הנוסחאות המתמטיות שלכם ליצירות מופת יפהפיות וצבעוניות.",
        "feat3_title": "חידון מהנה",
        "feat3_desc": "בחנו את המוח שלכם עם חידות שמרגישות כמו משחק וידאו.",
        "test1_name": "המורה סם",
        "test1_text": "Mathopy גורם למתמטיקה להרגיש כמו זמן משחק! התלמידים שלי מתים על זה.",
        "test2_name": "ליאו, בן 8",
        "test2_text": "פעם שנאתי מתמטיקה, אבל עכשיו אני אוהב ליצור אמנות עם מספרים!",
        "test3_name": "ד\"ר ג'יין",
        "test3_text": "האיזון המושלם בין ניתוח ברמה גבוהה ללמידה משחקית."
      },
      "kids": {
        "backpack": "התרמיל שלי",
        "quote": "«כל ילד הוא אמן. הבעיה היא איך להישאר אמן כשאנחנו גדלים»."
      },
      "solver": {
        "header": "פתרון מתמטיקה קסומה",
        "sub_text": "ראו את הקסם נפרש בזמן שאנו פותרים את הבעיות שלכם יחד!",
        "logical_deduction": "הסבר קסום",
        "processing": "מערבבים צבעים ומתמטיקה...",
        "placeholder": "הקלידו את הבעיה המתמטית שלכם כאן...",
        "analyzing": "מנתח...",
        "input_label": "הקלידו את הבעיה שלכם. ראו את הקסם קורה!"
      },
      "visualizer": {
        "header_kids": "יוצר אמנות",
        "placeholder_kids": "תארו את הציור הקסום שלכם... למשל ספירלת קשת צבעונית!",
        "btn_kids": "צרו ציור קסום!",
        "sidebar_kids": "צורות קסומות",
        "badge_kids": "קסם מתמטי טהור!",
        "loading_kids": "מערבבים צבעים ומתמטיקה...",
        "again_kids": "ציירו שוב!"
      },
      "practical": {
        "header_kids": "סימולציות מגרש משחקים",
        "title_kids": "ראו מתמטיקה בפעולה!",
        "placeholder_kids": "מה כדאי לנו לבנות היום?",
        "btn_kids": "התחל!",
        "loading_kids": "בונים את העולם שלך...",
        "empty_kids": "הקלידו משהו למעלה כדי להתחיל!"
      },
      "practice": {
        "header_kids": "זמן לחידון מהנה!",
        "sub_kids": "אתגרו את המוח שלכם",
        "badge_kids": "מוכנים? היכון! צא!",
        "input_label_kids": "מה אנחנו לומדים היום?",
        "placeholder_kids": "נושא קסם מתמטי...",
        "difficulty_kids": "כמה קשה זה צריך להיות?",
        "btn_kids": "התחילו את ההרפתקה!",
        "loading_kids": "בונים שבילים קסומים...",
        "congrats_kids": "יש! עשית א זה!",
        "score_kids": "קיבלת {{score}} מתוך {{total}} נקודות קסם!",
        "again_kids": "שחקו שוב!"
      },
      "custom": {
        "header_kids": "השיעורים שלי",
        "title_kids": "צרו קווסט משלכם",
        "input_label_kids": "במה אתם רוצים להתמחות?",
        "placeholder_kids": "למשל: אני רוצה ללמוד על צורות קסומות...",
        "past_kids": "קווסטים קודמים",
        "btn_kids": "צרו את הקווסט שלי!",
        "loading_btn_kids": "מתייעצים עם ספר הקסמים...",
        "output_header_kids": "מגילת קווסט",
        "output_sub_kids": "הדרך שלך",
        "loading_text_kids": "מציירים את מפת הדרכים שלך...",
        "empty_kids": "הקווסט שלך מחכה!"
      },
      "nav": {
        "magic_solver": "פתרון קסם",
        "fun_quiz": "חידון כיף",
        "playground": "מגרש משחקים",
        "art_maker": "יוצר אמנות",
        "my_lessons": "השיעורים שלי"
      },
      "footer": {
        "kids": "צויר ביד באהבה על ידי Mathopy AI"
      }
    }
  },
  fi: {
    translation: {
      "common": {
        "change_dimension": "Vaihda Ulottuvuutta",
        "eye_comfort": "Silmien Mukavuus",
        "theme_toggle": "Vaihda Teemaa",
        "menu": "Valikko",
        "execute": "Suorita",
        "clear": "Tyhjennä",
        "loading": "Ladataan...",
        "play_again": "Pelaa uudelleen",
        "score": "Pisteet: {{score}}/{{total}}",
        "back": "Takaisin"
      },
      "age_selection": {
        "welcome": "TERVETULOA MATHOPYYN",
        "choose_dimension": "Valitse matemaattinen ulottuvuutesi",
        "kids": "Lasten tila",
        "kids_sub": "Taikuus & Liidut"
      },
      "landing": {
        "features": "Ominaisuudet",
        "how_works": "Miten se toimii",
        "play_now": "Pelaa nyt!",
        "hero_title": "Matematiikka on <0>Taikuutta!</0>",
        "hero_subtitle": "Astu maailmaan, jossa numerot heräävät eloon! Ratkaise arvoituksia, rakenna maailmoja ja luo taidetta Mathopyn voimalla.",
        "start_magic": "Aloita taikuus",
        "unlock_brain": "Vapauta aivosi!",
        "cool_superpowers": "Upeita supervoimia",
        "superpowers_sub": "Mitä voit tehdä Mathopyn avulla?",
        "how_to_play": "Kuinka pelata?",
        "step1_title": "Valitse ulottuvuutesi",
        "step1_desc": "Valitse lasten tila taikuutta ja kaunista liitutaidetta varten.",
        "step2_title": "Kysy mitä vain!",
        "step2_desc": "Kirjoita ongelma, puhu tekoälylle tai piirrä muoto näytölle.",
        "step3_title": "Luo ja jaa",
        "step3_desc": "Katso, kun taikapiirrokset ilmestyvät tai ratkaise vaikeita arvoituksia helposti!",
        "ready_start": "Valmis aloittamaan?",
        "play_kids": "Pelaa lapsille",
        "copyright": "Mathopy © 2026 — Tehty taikaliiduilla",
        "feat1_title": "Taikaratkaisija",
        "feat1_desc": "Ota kuva tai kirjoita ongelma. Katso, kuinka se ratkeaa kuin taikuutta!",
        "feat2_title": "Taiteen luoja",
        "feat2_desc": "Muuta matemaattiset kaavasi kauniiksi, värikkäiksi mestariteoksiksi.",
        "feat3_title": "Hieno tietovisa",
        "feat3_desc": "Testaa aivosi arvoituksilla, jotka tuntuvat videopeliltä.",
        "test1_name": "Opettaja Sam",
        "test1_text": "Mathopy saa matematiikan tuntumaan leikiltä! Oppilaani rakastavat sitä.",
        "test2_name": "Leo, 8 v",
        "test2_text": "Ennen vihasin matematiikkaa, mutta nyt rakastan taiteen luomista numeroilla!",
        "test3_name": "Tohtori Jane",
        "test3_text": "Täydellinen tasapaino korkean tason analyysin ja leikkisän oppimisen välillä."
      },
      "kids": {
        "backpack": "Repuni",
        "quote": "«Jokainen lapsi on taiteilija. Ongelmana on se, kuinka pysyä taiteilijana, kun kasvamme aikuisiksi»."
      },
      "solver": {
        "header": "Taikamatematiikan ratkaisija",
        "sub_text": "Katso taikuuden avautuvan, kun ratkaisemme ongelmasi yhdessä!",
        "logical_deduction": "Taikuus-selitys",
        "processing": "Värien ja matematiikan sekoittaminen...",
        "placeholder": "Kirjoita matemaattinen ongelmasi tähän...",
        "analyzing": "Analysoidaan...",
        "input_label": "Kirjoita ongelmasi. Katso taikuuden tapahtuvan!"
      },
      "visualizer": {
        "header_kids": "Taiteen luoja",
        "placeholder_kids": "Kuvaile taikapiirrostasi... esimerkiksi värikäs sateenkaarispiraali!",
        "btn_kids": "Luo taikapiirros!",
        "sidebar_kids": "Taikuuden muodot",
        "badge_kids": "Puhdasta matematiikan taikuutta!",
        "loading_kids": "Värien ja matematiikan sekoittaminen...",
        "again_kids": "Piirrä uudelleen!"
      },
      "practical": {
        "header_kids": "Leikkikenttä-simulaatiot",
        "title_kids": "Katso matematiikka toiminnassa!",
        "placeholder_kids": "Mitä meidän pitäisi rakentaa tänään?",
        "btn_kids": "Aloita!",
        "loading_kids": "Rakennetaan maailmaasi...",
        "empty_kids": "Kirjoita jotain yllä olevaan aloittaaksesi!"
      },
      "practice": {
        "header_kids": "Hienon tietovisan aika!",
        "sub_kids": "Haasta aivosi",
        "badge_kids": "Valmiina? Paikoillanne! NYT!",
        "input_label_kids": "Mitä opiskelemme tänään?",
        "placeholder_kids": "Matematiikan taikuus -aihe...",
        "difficulty_kids": "Kuinka vaikeaa sen pitäisi olla?",
        "btn_kids": "Aloita seikkailu!",
        "loading_kids": "Rakennetaan taikapolut...",
        "congrats_kids": "JIIHAA! ONNISTUIT!",
        "score_kids": "Sait {{score}} / {{total}} taikapistettä!",
        "again_kids": "Pelaa uudelleen!"
      },
      "custom": {
        "header_kids": "Oppituntini",
        "title_kids": "Luo oma tehtäväsi",
        "input_label_kids": "Mitä haluat hallita?",
        "placeholder_kids": "esim. Haluan oppia taikuuden muodoista...",
        "past_kids": "Menneet tehtävät",
        "btn_kids": "Luo tehtäväni!",
        "loading_btn_kids": "Konsultoidaan taikakirjaa...",
        "output_header_kids": "Tehtäväkäärö",
        "output_sub_kids": "Polkusi",
        "loading_text_kids": "Piirretään tiekarttasi...",
        "empty_kids": "Tehtäväsi odottaa!"
      },
      "nav": {
        "magic_solver": "Taikaratkaisija",
        "fun_quiz": "Hieno tietovisa",
        "playground": "Leikkikenttä",
        "art_maker": "Taiteen luoja",
        "my_lessons": "Oppituntini"
      },
      "footer": {
        "kids": "Mathopy AI:n rakkaudella käsin piirtämä"
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // react already safes from xss
    }
  });

export default i18n;
