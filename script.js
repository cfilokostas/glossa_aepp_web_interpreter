// Program Commands
const programCommands = [
    "ΠΡΟΓΡΑΜΜΑ", "ΣΤΑΘΕΡΕΣ", "ΜΕΤΑΒΛΗΤΕΣ", "ΑΚΕΡΑΙΕΣ:", "ΠΡΑΓΜΑΤΙΚΕΣ:",
    "ΧΑΡΑΚΤΗΡΕΣ:", "ΛΟΓΙΚΕΣ:", "ΑΡΧΗ", "ΓΡΑΨΕ", "ΔΙΑΒΑΣΕ", "ΑΝ ΤΟΤΕ",
    "ΑΛΛΙΩΣ_ΑΝ ΤΟΤΕ", "ΑΛΛΙΩΣ", "ΤΕΛΟΣ_ΑΝ", "ΓΙΑ ΑΠΟ ΜΕΧΡΙ ΜΕ_ΒΗΜΑ",
    "ΤΕΛΟΣ_ΕΠΑΝΑΛΗΨΗΣ", "ΟΣΟ ΕΠΑΝΑΛΑΒΕ", "ΜΕΧΡΙΣ_ΟΤΟΥ", "ΚΑΛΕΣΕ",
    "ΤΕΛΟΣ_ΠΡΟΓΡΑΜΜΑΤΟΣ", "ΔΙΑΔΙΚΑΣΙΑ", "ΤΕΛΟΣ_ΔΙΑΔΙΚΑΣΙΑΣ", "ΣΥΝΑΡΤΗΣΗ:ΑΚΕΡΑΙΑ",
    ":ΠΡΑΓΜΑΤΙΚΗ", ":ΧΑΡΑΚΤΗΡΑΣ", ":ΛΟΓΙΚΗ", "ΤΕΛΟΣ_ΣΥΝΑΡΤΗΣΗΣ", "Α_ΜΟ Α_ΤΟ ΕΟ ΕΦΟ",
    "ΗΜΟ ΛΟΓ ΤΟ ΣΥΝΟ Τ_ΡΟ", "ΑΛΗΘΗΣ ΨΕΥΔΗΣ", "= < > <= >=", "- + / * ^ div mod",
    "Η ΚΑΙ ΟΧΙ <-"
];

// Algorithm Commands
const algorithmCommands = [
    "Αλγόριθμος", "Δεδομένα // //", "Εμφάνισε", "Εκτύπωσε", "Διάβασε",
    "Αντιμετάθεσε", "Αν τότε", "αλλιώς_αν τότε", "αλλιώς", "Τέλος_αν",
    "Για από μέχρι με_βήμα", "Τέλος_επανάληψης", "Όσο επαναλάβε",
    "Τέλος_επανάληψης", "Αρχή_επανάληψης", "Μέχρις_ότου", "Αποτελέσματα // //",
    "Τέλος", "Α_Μ() Α_Τ() Ε() ΕΦ()", "ΗΜ() ΛΟΓ() ΣΥΝ() Τ_Ρ()", "Αληθής Ψευδής",
    "= <> < > <= >=", "- + / * ^ div mod", "ή και όχι <-"
];

//Auto correct mapping 
// Correction mappings for both types


const algorithmCorrections = {};
const programCorrections = {};

// Define an array of words with their variations
const AlgCorrections = [
    //{ variations: ["εκτύπωσε", "εκτυπωσε", "Εκτυπωσε"], correct: "Εκτύπωσε" },
    { variations: ["αλγοριθμος", "αλγόριθμος", "Αλγοριθμος", "ΑΛΓΟΡΙΘΜΟς", "algoriumow", "alg;oriumow", "Algoriumow", "Alg;oriumow", "ALGORITHMOW", "algorithmos", "ALGORITHMOS", "αλγοριθμοσ", "αλγόριθμοσ", "Αλγοριθμοσ", "Αλγόριθμοσ", "ΑΛΓΟΡΙΘΜΟΣ", "algoriumos", "alg;oriumos", "Algoriumos", "Alg;oriumos"], correct: "Αλγόριθμος" },
    { variations: ["δεδομενα", "δεδομένα", "Δεδομενα", "ΔΕΔΟΜΕΝΑ", "dedomena", "dedom;ena", "Dedomena", "Dedom;ena", "DEDOMENA"], correct: "Δεδομένα" },
    { variations: ["εμφανισε", "εμφάνισε", "Εμφανισε", "ΕΜΦΑΝΙΣΕ", "emfanise", "emf;anise", "Emfanise", "Emf;anise", "EMFANISE"], correct: "Εμφάνισε" },
    { variations: ["εκτυπωσε", "εκτύπωσε", "Εκτυπωσε", "ΕΚΤΥΠΩΣΕ", "ektypvse", "ekt;ypvse", "Ektypvse", "Ekt;ypvse", "EKTYPVSE", "ektypwse", "EKTYPWSE"], correct: "Εκτύπωσε" },
    { variations: ["διαβασε", "διάβασε", "Διαβασε", "ΔΙΑΒΑΣΕ", "diabase", "di;abase", "Diabase", "Di;abase", "DIABASE", "diavase", "DIAVASE"], correct: "Διάβασε" },
    { variations: ["αντιμεταθεσε", "αντιμετάθεσε", "Αντιμεταθεσε", "ΑΝΤΙΜΕΤΑΘΕΣΕ", "antimetauese", "antimet;auese", "Antimetauese", "Antimet;auese", "ANTIMETAUESE", "antimetathese", "ANTIMETATHESE"], correct: "Αντιμετάθεσε" },
    { variations: ["αν", "ΑΝ", "an", "An", "AN"], correct: "Αν" },
    { variations: ["τοτε", "Τοτε", "Τότε", "ΤΟΤΕ", "tote", "t;ote", "Tote", "T;ote", "TOTE"], correct: "τότε" },
    { variations: ["αλλιως_αν", "Αλλιως_αν", "Αλλιώς_αν", "ΑΛΛΙΩς_ΑΝ", "allivw_an", "alli;vw_an", "Allivw_an", "Alli;vw_an", "ALLIVW_AN", "alliws_an", "ALLIWS_AN", "αλλιωσ_αν", "αλλιώσ_αν", "Αλλιωσ_αν", "Αλλιώσ_αν", "ΑΛΛΙΩΣ_ΑΝ", "allivs_an", "alli;vs_an", "Allivs_an", "Alli;vs_an", "ALLIVS_AN"], correct: "αλλιώς_αν" },
    { variations: ["αλλιως", "Αλλιως", "Αλλιώς", "ΑΛΛΙΩς", "allivw", "alli;vw", "Allivw", "Alli;vw", "ALLIVW", "alliws", "ALLIWS", "αλλιωσ", "Αλλιωσ", "Αλλιώσ", "ΑΛΛΙΩΣ", "allivs", "alli;vs", "Allivs", "Alli;vs", "ALLIVS"], correct: "αλλιώς" },
    { variations: ["τελος_αν", "Τελος_αν", "ΤΕΛΟς_ΑΝ", "telow_an", "t;elow_an", "Telow_an", "T;elow_an", "TELOW_AN", "telos_an", "TELOS_AN", "τελοσ_αν", "Τελοσ_αν", "Τέλοσ_αν", "ΤΕΛΟΣ_ΑΝ", "t;elos_an", "Telos_an", "T;elos_an"], correct: "Τέλος_αν" },
    { variations: ["για", "ΓΙΑ", "gia", "Gia", "GIA"], correct: "Για" },
    { variations: ["απο", "Απο", "Από", "ΑΠΟ", "apo", "ap;o", "Apo", "Ap;o", "APO"], correct: "από" },
    { variations: ["μεχρι", "Μεχρι", "Μέχρι", "ΜΕΧΡΙ", "mexri", "m;exri", "Mexri", "M;exri", "MEXRI"], correct: "μέχρι" },
    { variations: ["με_βημα", "Με_βημα", "Με_βήμα", "ΜΕ_ΒΗΜΑ", "me_bhma", "me_b;hma", "Me_bhma", "Me_b;hma", "ME_BHMA", "me_vhma", "ME_VHMA"], correct: "με_βήμα" },
    { variations: ["οσο", "όσο", "Οσο", "Όσο", "ΟΣΟ", "oso", ";oso", "Oso", ";Oso", "OSO"], correct: "Όσο" },
    { variations: ["επαναλαβε", "Επαναλαβε", "Επανάλαβε", "ΕΠΑΝΑΛΑΒΕ", "epanalabe", "epan;alabe", "Epanalabe", "Epan;alabe", "EPANALABE", "epanalave", "EPANALAVE"], correct: "επανάλαβε" },
    { variations: ["τελος_επαναληψης", "τέλος_επανάληψης", "Τελος_επαναληψης", "ΤΕΛΟς_ΕΠΑΝΑΛΗΨΗς", "telow_epanalhchw", "t;elow_epan;alhchw", "Telow_epanalhchw", "T;elow_epan;alhchw", "TELOW_EPANALHCHW", "telos_epanalhpshs", "TELOS_EPANALHPSHS", "τελοσ_επαναληψησ", "τέλοσ_επανάληψησ", "Τελοσ_επαναληψησ", "ΤΕΛΟΣ_ΕΠΑΝΑΛΗΨΗΣ", "telos_epanalhchs", "t;elos_epan;alhchs", "Telos_epanalhchs", "T;elos_epan;alhchs", "TELOS_EPANALHCHS"], correct: "Τέλος_επανάληψης" },
    { variations: ["αρχη_επαναληψης", "αρχή_επανάληψης", "Αρχη_επαναληψης", "ΑΡΧΗ_ΕΠΑΝΑΛΗΨΗς", "arxh_epanalhchw", "arx;h_epan;alhchw", "Arxh_epanalhchw", "Arx;h_epan;alhchw", "ARXH_EPANALHCHW", "arxh_epanalhpshs", "ARXH_EPANALHPSHS", "αρχη_επαναληψησ", "αρχή_επανάληψησ", "Αρχη_επαναληψησ", "ΑΡΧΗ_ΕΠΑΝΑΛΗΨΗΣ", "arxh_epanalhchs", "arx;h_epan;alhchs", "Arxh_epanalhchs", "Arx;h_epan;alhchs", "ARXH_EPANALHCHS"], correct: "Αρχή_επανάληψης" },
    { variations: ["μεχρις_οτου", "μέχρις_ότου", "Μεχρις_οτου", "ΜΕΧΡΙς_ΟΤΟΥ", "mexriw_otoy", "m;exriw_;otoy", "Mexriw_otoy", "M;exriw_;otoy", "MEXRIW_OTOY", "mexris_otoy", "MEXRIS_OTOY"], correct: "Μέχρις_ότου" },
    { variations: ["αποτελεσματα", "αποτελέσματα", "Αποτελεσματα", "ΑΠΟΤΕΛΕΣΜΑΤΑ", "apotelesmata", "apotel;esmata", "Apotelesmata", "Apotel;esmata", "APOTELESMATA"], correct: "Αποτελέσματα" },
    { variations: ["τελος", "τέλος", "Τελος", "ΤΕΛΟς", "telow", "t;elow", "Telow", "T;elow", "TELOW", "telos", "TELOS", "τελοσ", "τέλοσ", "Τελοσ", "ΤΕΛΟΣ", "t;elos", "Telos", "T;elos"], correct: "Τέλος" },

];

// Loop through the corrections array and populate algorithmCorrections
AlgCorrections.forEach(item => {
    item.variations.forEach(variation => {
        algorithmCorrections[variation] = item.correct;
    });
});

const ProgCorrections = [
    {variations: ["προγραμμα", "πρόγραμμα", "programma", "PROGRAMMA", "programma", "PROGRAMMA"], correct: "ΠΡΟΓΡΑΜΜΑ" },
    {variations: ["σταθερες", "σταθερές", "stauerew", "STAUEREW", "statheres", "STATHERES", "σταθερεσ", "staueres", "STAUERES"], correct: "ΣΤΑΘΕΡΕΣ" },
    {variations: ["μεταβλητες", "μεταβλητές", "metablhtew", "METABLHTEW", "metablhtes", "METABLHTES", "μεταβλητεσ", "metablhtes", "METABLHTES"], correct: "ΜΕΤΑΒΛΗΤΕΣ" },
    {variations: ["ακεραιες", "ακέραιες", "ακεραιες:", "ΑΚΕΡΑΙΕΣ", "akeraiew", "AKERAIEW", "akeraies", "AKERAIES", "ακεραιεσ:", "akeraies", "AKERAIES"], correct: "ΑΚΕΡΑΙΕΣ:" },
    {variations: ["πραγματικες", "πραγματικές", "πραγματικες:", "ΠΡΑΓΜΑΤΙΚΕΣ", "pragmatikew", "PRAGMATIKEW", "pragmatikes", "PRAGMATIKES", "πραγματικεσ:", "pragmatikes", "PRAGMATIKES"], correct: "ΠΡΑΓΜΑΤΙΚΕΣ:" },
    {variations: ["χαρακτηρες", "χαρακτήρες", "χαρακτηρες:", "ΧΑΡΑΚΤΗΡΕΣ", "xarakthrew", "XARAKTHREW", "xarakthres", "XARAKTHRES", "χαρακτηρεσ:", "xarakthres", "XARAKTHRES"], correct: "ΧΑΡΑΚΤΗΡΕΣ:" },
    {variations: ["λογικες", "λογικές", "λογικες:", "ΛΟΓΙΚΕΣ", "logikew", "LOGIKEW", "logikes", "LOGIKES", "logikes", "LOGIKES"], correct: "ΛΟΓΙΚΕΣ:" },
    {variations: ["αρχη", "αρχή", "arxh", "ARXH", "arxh", "ARXH"], correct: "ΑΡΧΗ" },
    {variations: ["γραψε", "γράψε", "grace", "GRACE", "grapse", "GRAPSE"], correct: "ΓΡΑΨΕ" },
    {variations: ["διαβασε", "διάβασε", "diabase", "DIABASE", "diabase", "DIABASE"], correct: "ΔΙΑΒΑΣΕ" },
    {variations: ["αν", "an", "AN", "an", "AN"], correct: "ΑΝ" },
    {variations: ["τοτε", "τότε", "tote", "TOTE", "tote", "TOTE"], correct: "ΤΟΤΕ" },
    {variations: ["αλλιως_αν", "αλλιώς_αν", "allivw_an", "ALLIVW_AN", "alliws_an", "ALLIWS_AN", "αλλιωσ_αν", "allivs_an", "ALLIVS_AN"], correct: "ΑΛΛΙΩΣ_ΑΝ" },
    {variations: ["αλλιως", "αλλιώς", "allivw", "ALLIVW", "alliws", "ALLIWS", "αλλιωσ", "allivs", "ALLIVS"], correct: "ΑΛΛΙΩΣ" },
    {variations: ["τελος_αν", "τέλος_αν", "telow_an", "TELOW_AN", "telos_an", "TELOS_AN", "τελοσ_αν", "telos_an", "TELOS_AN"], correct: "ΤΕΛΟΣ_ΑΝ" },
    {variations: ["για", "gia", "GIA", "gia", "GIA"], correct: "ΓΙΑ" },
    {variations: ["απο", "apo", "APO", "apo", "APO"], correct: "ΑΠΟ" },
    {variations: ["μεχρι", "μέχρι", "mexri", "MEXRI", "mexri", "MEXRI"], correct: "ΜΕΧΡΙ" },
    {variations: ["με_βημα", "με_βήμα", "me_bhma", "ME_BHMA", "me_bhma", "ME_BHMA"], correct: "ΜΕ_ΒΗΜΑ" },
    {variations: ["αρχη_επαναληψης", "αρχή_επανάληψης", "arxh_epanalhchw", "ARXH_EPANALHCHW", "arxh_epanalhpshs", "ARXH_EPANALHPSHS", "αρχη_επαναληψησ", "arxh_epanalhchs", "ARXH_EPANALHCHS"], correct: "ΑΡΧΗ_ΕΠΑΝΑΛΗΨΗΣ" },
    {variations: ["οσο", "όσο", "oso", "OSO", "oso", "OSO"], correct: "ΟΣΟ" },
    {variations: ["επαναλαβε", "επανάλαβε", "epanalabe", "EPANALABE", "epanalabe", "EPANALABE"], correct: "ΕΠΑΝΑΛΑΒΕ" },
    {variations: ["τελος_επαναληψης", "τέλος_επανάληψης", "telow_epanalhchw", "TELOW_EPANALHCHW", "telos_epanalhpshs", "TELOS_EPANALHPSHS", "τελοσ_επαναληψησ", "telos_epanalhchs", "TELOS_EPANALHCHS"], correct: "ΤΕΛΟΣ_ΕΠΑΝΑΛΗΨΗΣ" },
    {variations: ["μεχρις_οτου", "μέχρις_ότου", "mexriw_otoy", "MEXRIW_OTOY", "mexris_otoy", "MEXRIS_OTOY", "μεχρισ_οτου", "mexris_otoy", "MEXRIS_OTOY"], correct: "ΜΕΧΡΙΣ_ΟΤΟΥ" },
    {variations: ["καλεσε", "κάλεσε", "kalewe", "KALEWE", "kalese", "KALESE"], correct: "ΚΑΛΕΣΕ" },
    {variations: ["τελος_προγραμματος", "τέλος_προγράμματος", "telow_programmatow", "TELOW_PROGRAMMATOW", "telos_programmatos", "TELOS_PROGRAMMATOS", "τελοσ_προγραμματοσ", "telos_programmatos", "TELOS_PROGRAMMATOS"], correct: "ΤΕΛΟΣ_ΠΡΟΓΡΑΜΜΑΤΟΣ" },
    {variations: ["διαδικασια", "διαδικασία", "diadikasia", "DIADIKASIA", "diadikasia", "DIADIKASIA"], correct: "ΔΙΑΔΙΚΑΣΙΑ" },
    {variations: ["τελος_διαδικασιας", "τέλος_διαδικασίας", "telow_diadikasiaw", "TELOW_DIADIKASIAW", "telos_diadikasias", "TELOS_DIADIKASIAS", "τελοσ_διαδικασιασ", "telos_diadikasias", "TELOS_DIADIKASIAS"], correct: "ΤΕΛΟΣ_ΔΙΑΔΙΚΑΣΙΑΣ" },
    {variations: ["συναρτηση", "συνάρτηση", "synarthsh", "SYNARTHSH", "synarthsh", "SYNARTHSH"], correct: "ΣΥΝΑΡΤΗΣΗ" },
    {variations: ["ακεραια", "ακέραια", ":ακεραια", "ΑΚΕΡΑΙΑ", "akeraia", "AKERAIA", "akeraia", "AKERAIA"], correct: ":ΑΚΕΡΑΙΑ" },
    {variations: ["πραγματικη", "πραγματική", ":πραγματικη", "ΠΡΑΓΜΑΤΙΚΗ", "pragmatikh", "PRAGMATIKH", "pragmatikh", "PRAGMATIKH"], correct: ":ΠΡΑΓΜΑΤΙΚΗ" },
    {variations: ["χαρακτηρας", "χαρακτήρας", ":χαρακτηρας", "ΧΑΡΑΚΤΗΡΑΣ", "xarakthraw", "XARAKTHRAW", "xarakthras", "XARAKTHRAS", ":χαρακτηρασ", "xarakthras", "XARAKTHRAS"], correct: ":ΧΑΡΑΚΤΗΡΑΣ" },
    {variations: ["λογικη", "λογική", ":λογικη", "ΛΟΓΙΚΗ", "logikh", "LOGIKH", "logikh", "LOGIKH"], correct: ":ΛΟΓΙΚΗ" },
    {variations: ["τελος_συναρτησης", "τέλος_συνάρτησης", "telow_synarthshw", "TELOW_SYNARTHSHW", "telos_synarthshs", "TELOS_SYNARTHSHS", "τελοσ_συναρτησησ", "telos_synarthshs", "TELOS_SYNARTHSHS"], correct: "ΤΕΛΟΣ_ΣΥΝΑΡΤΗΣΗΣ" },
    {variations: ["η", "h", "H", "h", "H"], correct: "Η" },
    {variations: ["και", "kai", "KAI", "kai", "KAI"], correct: "ΚΑΙ" },
    {variations: ["οχι", "όχι", "oxi", ";oxi", "OXI", "oxi", "OXI"], correct: "ΌΧΙ" },
    
];

// Loop through the corrections array and populate ProgramCorrections
ProgCorrections.forEach(item => {
    item.variations.forEach(variation => {
        programCorrections[variation] = item.correct;
    });
});

//end of mapping 

// Update commands based on selection
function updateCommands() {
    const typeSelect = document.getElementById('typeSelect').value;
    const commandsList = document.getElementById('commandsList');

    // Clear current commands
    commandsList.innerHTML = '';

    // Select correct command set
    const commands = (typeSelect === 'program') ? programCommands : algorithmCommands;

    // Add commands to the list
    commands.forEach(command => {
        const li = document.createElement('li');

        // Split command into words
        const words = command.split(' ');

        // Create span for each word
        words.forEach(word => {
            const span = document.createElement('span');
            span.textContent = word;

            // Add click listener to insert word at cursor
            span.onclick = () => insertAtCursor(word);

            // Optional styling for clickable word
            span.style.cursor = 'pointer';
            span.style.color = 'blue';
            span.style.marginRight = '5px';

            // Append span to list item
            li.appendChild(span);
        });

        // Append list item to commands list
        commandsList.appendChild(li);
    });
}

// Insert command at the cursor position in the textarea
function insertAtCursor(word) {
    const textarea = document.getElementById('code');
    const startPos = textarea.selectionStart;
    const endPos = textarea.selectionEnd;
    const textBefore = textarea.value.substring(0, startPos);
    const textAfter = textarea.value.substring(endPos, textarea.value.length);

    // Insert the word at cursor position
    textarea.value = textBefore + word + textAfter;

    // Move the cursor after the inserted word
    textarea.selectionStart = textarea.selectionEnd = startPos + word.length;

    // Focus back on the textarea
    textarea.focus();

    // Sync highlighting and line numbers
    syncHighlight();
    updateLineNumbers();
}

// Highlight the current line where the cursor is
function highlightLine() {
    const textarea = document.getElementById('code');
    const highlight = document.getElementById('highlight');
    const lines = textarea.value.split('\n');

    const cursorPosition = textarea.selectionStart;
    const textBeforeCursor = textarea.value.substring(0, cursorPosition);
    const currentLine = textBeforeCursor.split('\n').length - 1;

    highlight.innerHTML = '';
    const lineDiv = document.createElement('div');
    lineDiv.classList.add('current-line');
    lineDiv.style.top = `${currentLine * 1.2}em`;
    highlight.appendChild(lineDiv);
}

// Sync scrolling between textarea and highlight
function syncScroll() {
    const textarea = document.getElementById('code');
    const highlight = document.getElementById('highlight');
    highlight.scrollTop = textarea.scrollTop;
}

// Update line numbers in the textarea
function updateLineNumbers() {
    const textarea = document.getElementById('code');
    const lineNumbers = document.getElementById('lineNumbers');
    const lineCount = textarea.value.split('\n').length;

    lineNumbers.innerHTML = Array(lineCount).fill(0).map((_, i) => i + 1).join('<br>');
}

// Synchronize textarea content with the highlight div
function syncHighlight() {
    updateLineNumbers();
    // You could add additional synchronization here if needed
}

// Handle Tab key press to insert spaces
document.getElementById('code').addEventListener('keydown', function (e) {
    if (e.key === 'Tab') {
        e.preventDefault(); // Prevent the default tab behavior

        const textarea = this;

        // Force autocorrect, even if there's no separator yet
        autoCorrect(true); // Pass true to force autocorrect for the current word

        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;

        // Define how many spaces you want to insert (e.g., 4 spaces)
        const tabSpaces = '    ';

        // Insert spaces at the cursor position
        const textBefore = textarea.value.substring(0, start);
        const textAfter = textarea.value.substring(end);
        textarea.value = textBefore + tabSpaces + textAfter;

        // Move the cursor after the inserted spaces
        textarea.selectionStart = textarea.selectionEnd = start + tabSpaces.length;

        // Optional: Update line numbers or any other functions
        updateLineNumbers();
        syncHighlight();
    }
});

// Auto-correct feature - applies correction after finishing a word or forced correction
function autoCorrect(force = false) {
    const textarea = document.getElementById('code');
    const cursorPosition = textarea.selectionStart; // Get current cursor position
    const textBeforeCursor = textarea.value.substring(0, cursorPosition);

    // Check the last character entered
    const lastChar = textBeforeCursor.charAt(textBeforeCursor.length - 1);

    // Check if the last character is a word separator, or if we are forcing autocorrect
    const isWordSeparator = [' ', '.', ',', ';', '\n'].includes(lastChar) || force;

    if (isWordSeparator) {
        // If 'force' is true (Tab key), correct the current word. Otherwise, correct the word before the separator.
        const words = textBeforeCursor.split(/[\s.,;]+/); // Split by spaces, punctuation, etc.
        const lastWord = force ? words[words.length - 1] : words[words.length - 2]; // Get the correct last word for Tab or space

        if (!lastWord) return; // If there's no word to correct, return early

        const lowerCaseWord = lastWord.toLowerCase(); // Convert to lowercase for matching

        // Determine the corrections to use based on the selected type
        const typeSelect = document.getElementById('typeSelect').value;
        const corrections = (typeSelect === 'program') ? programCorrections : algorithmCorrections;

        // Check for corrections
        const correctWord = corrections[lowerCaseWord];
        if (correctWord) {
            // Find the start index of the last word
            const wordStartIndex = force 
                ? cursorPosition - lastWord.length // For Tab, the last word is immediately before the cursor
                : textBeforeCursor.lastIndexOf(lastWord); // For other separators, find the last occurrence of the word

            // Replace the last word with the correct version
            const correctedText = textarea.value.substring(0, wordStartIndex) +
                correctWord +
                (force ? '' : lastChar) + // Keep the separator (space or punctuation) unless forced (e.g., Tab)
                textarea.value.substring(cursorPosition); // Keep the rest of the text unchanged

            textarea.value = correctedText;

            // Restore cursor position after correction
            textarea.selectionStart = textarea.selectionEnd = wordStartIndex + correctWord.length + (force ? 0 : 1); // Adjust for the separator if not forced
        }
    }
}

// Listen for input changes to handle regular typing (space, newline, punctuation)
document.getElementById('code').addEventListener('input', () => {
    autoCorrect();
});

// Initialize commands on page load
window.onload = updateCommands;

