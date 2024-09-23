// Εντολές για Πρόγραμμα
const programCommands = [
    "ΠΡΟΓΡΑΜΜΑ",
    "ΣΤΑΘΕΡΕΣ",
    "ΜΕΤΑΒΛΗΤΕΣ",
    "ΑΚΕΡΑΙΕΣ:",
    "ΠΡΑΓΜΑΤΙΚΕΣ:",
    "ΧΑΡΑΚΤΗΡΕΣ:",
    "ΛΟΓΙΚΕΣ:",
    "ΑΡΧΗ",
    "ΓΡΑΨΕ",
    "ΔΙΑΒΑΣΕ",
    "ΑΝ ΤΟΤΕ",
    "ΑΛΛΙΩΣ_ΑΝ ΤΟΤΕ",
    "ΑΛΛΙΩΣ",
    "ΤΕΛΟΣ_ΑΝ",
    "ΓΙΑ ΑΠΟ ΜΕΧΡΙ ΜΕ_ΒΗΜΑ",
    "ΤΕΛΟΣ_ΕΠΑΝΑΛΗΨΗΣ",
    "ΟΣΟ ΕΠΑΝΑΛΑΒΕ",
    "ΤΕΛΟΣ_ΕΠΑΝΑΛΗΨΗΣ",
    "ΜΕΧΡΙΣ_ΟΤΟΥ",
    "ΚΑΛΕΣΕ",
    "ΤΕΛΟΣ_ΠΡΟΓΡΑΜΜΑΤΟΣ",
    "ΔΙΑΔΙΚΑΣΙΑ",
    "ΤΕΛΟΣ_ΔΙΑΔΙΚΑΣΙΑΣ",
    "ΣΥΝΑΡΤΗΣΗ:ΑΚΕΡΑΙΑ",
    ":ΠΡΑΓΜΑΤΙΚΗ",
    ":ΧΑΡΑΚΤΗΡΑΣ",
    ":ΛΟΓΙΚΗ",
    "ΤΕΛΟΣ_ΣΥΝΑΡΤΗΣΗΣ",
    "Α_ΜΟ Α_ΤΟ ΕΟ ΕΦΟ",
    "ΗΜΟ ΛΟΓ ΤΟ ΣΥΝΟ Τ_ΡΟ",
    "ΑΛΗΘΗΣ ΨΕΥΔΗΣ",
    "= < > <= >=",
    "- + / * ^ div mod",
    "Η ΚΑΙ ΟΧΙ <-"
];

// Εντολές για Αλγόριθμο
const algorithmCommands = [
    "Αλγόριθμος",
    "Δεδομένα // //",
    "Εμφάνισε",
    "Εκτύπωσε",
    "Διάβασε",
    "Αντιμετάθεσε",
    "Αν τότε",
    "αλλιώς_αν τότε",
    "αλλιώς",
    "Τέλος_αν",
    "Για από μέχρι με_βήμα",
    "Τέλος_επανάληψης",
    "Όσο επαναλάβε",
    "Τέλος_επανάληψης",
    "Αρχή_επανάληψης",
    "Μέχρις_ότου",
    "Αποτελέσματα // //",
    "Τέλος",
    "Α_Μ() Α_Τ() Ε() ΕΦ()",
    "ΗΜ() ΛΟΓ() ΣΥΝ() Τ_Ρ()",
    "Αληθής Ψευδής",
    "= <> < > <= >=",
    "- + / * ^ div mod",
    "ή και όχι <-"
];

// Αλλάζει τις εντολές ανάλογα με την επιλογή Αλγόριθμου ή Προγράμματος
function updateCommands() {
    const TypeSelect = document.getElementById('typeSelect').value;
    const commandsList = document.getElementById('commandsList');

    // Καθαρισμός τρεχουσών εντολών
    commandsList.innerHTML = '';

    let commands = [];

    if (TypeSelect === 'algorithm') {
        // Επιλογές για Αλγόριθμο
        commands = algorithmCommands;
    } else if (TypeSelect === 'program') {
        // Επιλογές για Πρόγραμμα
        commands = programCommands;
    }

    // Προσθήκη των εντολών στη λίστα ως πλήρη γραμμή
    commands.forEach(command => {
        const li = document.createElement('li');
        
        // Διαχωρισμός της εντολής σε λέξεις
        const words = command.split(' ');

        // Για κάθε λέξη δημιουργείται ένα span που είναι clickable
        words.forEach((word, index) => {
            const span = document.createElement('span');
            span.textContent = word;

            // Προσθήκη event listener για το κάθε span
            span.onclick = () => insertAtCursor(word);

            // Προαιρετικό styling για να φαίνεται clickable
            span.style.cursor = 'pointer';
            span.style.color = 'blue'; // Κάνει το κείμενο να ξεχωρίζει ως clickable
            span.style.marginRight = '5px'; // Για διαχωρισμό των λέξεων

            // Προσθήκη του span στο <li>
            li.appendChild(span);
        });

        // Προσθήκη του <li> στη λίστα εντολών
        commandsList.appendChild(li);
    });
}

// Λειτουργία εισαγωγής της εντολής στο σημείο του κέρσορα
function insertAtCursor(word) {
    const textarea = document.getElementById('code');
    const startPos = textarea.selectionStart;
    const endPos = textarea.selectionEnd;
    const textBefore = textarea.value.substring(0, startPos);
    const textAfter = textarea.value.substring(endPos, textarea.value.length);

    // Εισαγωγή της λέξης στο σημείο του κέρσορα
    textarea.value = textBefore + word + textAfter;

    // Μετακίνηση του κέρσορα αμέσως μετά την εισαγόμενη λέξη
    textarea.selectionStart = textarea.selectionEnd = startPos + word.length;

    // Focus στο textarea για συνεχιζόμενη γραφή
    textarea.focus();

    // Ενημέρωση αριθμών γραμμών
    updateLineNumbers();
}

// Ενημέρωση αριθμών γραμμών στο textarea
function updateLineNumbers() {
    const code = document.getElementById('code');
    const lineNumbers = document.getElementById('lineNumbers');
    
    const lines = code.value.split('\n').length;
    lineNumbers.innerHTML = '';
    
    for (let i = 1; i <= lines; i++) {
        lineNumbers.innerHTML += i + '<br>';
    }
}

// Εντολή εκκίνησης για να φορτώσει αρχικές εντολές
window.onload = updateCommands;