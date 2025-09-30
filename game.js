// ================== Config ของแต่ละ Flow ==================
const flowConfigs = [
    {
        bg: 'patient_bg',
        ecg: 'img_ecg',
        xray: 'img_xray',
        other: 'img_other',
        diseases: ["Tietze syndrome","Intercostal muscle strain","Fibromyalgia","Slipping rib syndrome",
                   "Herpes zoster","Acute Pericarditis","Panic attack","Mitral valve prolapse","Costochondritis",
                   "Atypical angina","Cervical radiculopathy"],

        medicines: ["Amoxicillin","Cetirizine","Diazepam","NSAID",
                    "Insulin","Metformin","Omeprazole","Prednisolone","Salbutamol","Colchicine"],

        correctDiseases: ["Costochondritis"],
        correctMedicines: ["NSAID"],
        popupCorrect: 'popupCorrect',
        popupWrong: 'popupWrong',
        popupAnswer: 'popupAnswer'
    },
    {
        bg: 'patient_bg2',
        ecg: 'img_ecg2',
        xray: 'img_xray2',
        other: 'img_other2',
        diseases: ["Peptic ulcer disease", "Functional dyspepsia", "Hiatal hernia","Hiatal hernia","Esophageal spasm",
            "Achalasia","Cholelithiasis","Pulmonary embolism","Anxiety","Gastroesophageal reflux","Chronic heart failure","Unstable angina",],

        medicines: [ "NSAID", "Tramadol","Proton pump inhibitor", "Metoclopramide","Paracetamol" ],

        correctDiseases: ["Gastroesophageal reflux"],
        correctMedicines: ["Proton pump inhibitor", "Metoclopramide"],
        popupCorrect: 'popupCorrect2',
        popupWrong: 'popupWrong2',
        popupAnswer: 'popupAnswer2'
    },
    {
    // Flow 3
    bg: 'patient_bg3',
    ecg: 'img_ecg3',
    xray: 'img_xray3',
    other: 'img_other3',
    diseases: ["Mitral regurgitation", "Hyperthyroidism", "Down syndrome", 
           "Acromegaly", "Ehlers-Danlos syndrome","Marfan syndrome", "Klinefelter syndrome", "Turner syndrome", 
           "Cushing’s syndrome", "Ankylosing spondylitis", "Rheumatic heart disease"],

    medicines: ["Gaba pentin",  "Intercostal drainage", "Surgery", 
            "Beta-blockers","ARBs"],

    correctDiseases: ["Marfan syndrome"],
    correctMedicines: ["Beta-blockers", "ARBs","Intercostal drainage"],
    popupCorrect: 'popupCorrect3',
    popupWrong: 'popupWrong3',
    popupAnswer: 'popupAnswer3'
  },
  {
    // Flow 4
    bg: 'patient_bg4',
    ecg: 'img_ecg4',
    xray: 'img_xray4',
    other: 'img_other4',
    diseases: ["Tietze syndrome","Intercostal muscle strain","Fibromyalgia","Slipping rib syndrome",
                   "Herpes zoster","Panic attack","Mitral valve prolapse","Costochondritis","aortic dissection",
                   "Atypical angina","Cervical radiculopathy"],

   medicines: ["Metformin", "Vasodilators", "Atorvastatin", "Omeprazole", 
            "Beta-blockers", "Ciprofloxacin", "Prednisolone", "Insulin", 
            "Pain control", "Levothyroxine", "Fluoxetine"],

    correctDiseases: ["aortic dissection"],
    correctMedicines: ["Beta-blockers","Vasodilators","Pain control"],
    popupCorrect: 'popupCorrect4',
    popupWrong: 'popupWrong4',
    popupAnswer: 'popupAnswer4'
  },
  {
    // Flow 5
    bg: 'patient_bg5',
    ecg: 'img_ecg5',
    xray: 'img_xray5',
    other: 'img_other5',
    diseases:  ["Mitral regurgitation", "Hyperthyroidism", "Down syndrome", 
           "Acromegaly", "Ehlers-Danlos syndrome","Marfan syndrome", "Pericarditis", "Turner syndrome", 
           "Cushing’s syndrome", "Typical angina", "Rheumatic heart disease"],

    medicines: ["Nitrates","Beta-blockers"," Calcium channel blockers", "Statin","เลือกทั้งหมด",  ],

    correctDiseases: ["Typical angina"],
    correctMedicines:  ["เลือกทั้งหมด"],
    popupCorrect: 'popupCorrect5',
    popupWrong: 'popupWrong5',
    popupAnswer: 'popupAnswer5'
  },
  {
    // Flow 6
    bg: 'patient_bg6',
    ecg: 'img_ecg6',
    xray: 'img_xray6',
    other: 'img_other6',
    diseases: ["Coronary spasm", "Unstable angina", "Chronic coronary syndrome", "STEMI", 
           "NSTEMI", "Myocarditis", "Takotsubo cardiomyopathy", "Aortic dissection", 
           "Pericarditis", "Pulmonary embolism", "Pneumothorax"],

    medicines: ["Omeprazole", "Primary PCI", "Metformin", "Thrombolytic therapy", 
            "Levothyroxine", "Ciprofloxacin", "Fluoxetine", "Prednisolone", 
            "Loratadine", "Alendronate"],

    correctDiseases: ["STEMI"],
    correctMedicines: ["Primary PCI","Thrombolytic therapy"],
    popupCorrect: 'popupCorrect6',
    popupWrong: 'popupWrong6',
    popupAnswer: 'popupAnswer6'
  },
  {
    // Flow 7
    bg: 'patient_bg7',
    ecg: 'img_ecg7',
    xray: 'img_xray7',
    other: 'img_other7',
    diseases: ["Tietze syndrome","Intercostal muscle strain","Fibromyalgia","Slipping rib syndrome",
                   "Herpes zoster","Acute Pericarditis","Panic attack","Mitral valve prolapse","Costochondritis",
                   "Atypical angina","Cervical radiculopathy"],

    medicines: ["Acetaminophen","Amoxicillin","Cetirizine","Diazepam","NSAID",
                    "Insulin","Metformin","Omeprazole","Prednisolone","Salbutamol","Colchicine"],

    correctDiseases: ["Acute Pericarditis"],
    correctMedicines: ["Colchicine","NSAID","Colchicine"],
    popupCorrect: 'popupCorrect7',
    popupWrong: 'popupWrong7',
    popupAnswer: 'popupAnswer7'
  },
];

let game;
let t = 0;
let bannerSpeed = 2;

class MainMenu extends Phaser.Scene {
    constructor() {
        super({ key: 'MainMenu' });
    }

    preload() {
        // ✅ ใช้ path เดียวกันหมด assets/
        this.load.image('background', 'assets/img/Background.PNG'); 
        this.load.image('character', 'assets/img/Character.png'); 
        this.load.image('startButton', 'assets/img/StartButton.png'); 
        this.load.image('gameBackground', 'assets/img/GameBackground.png'); 
        this.load.image('guard', 'assets/img/Guard.png'); 
        this.load.image('banner', 'assets/img/Banner.png'); 
        this.load.image('medicalButton', 'assets/img/MedicalButton.png'); 
        this.load.image('popupFrame', 'assets/img/PopupFrame.png'); 
        this.load.image('deptA', 'assets/img/DeptA.png'); 
        this.load.image('PatientCheckBG', 'assets/img/PatientCheckBG.png'); 

        // PatientCheck
        this.load.image('patient_bg', 'assets/patient_bg.png');
        this.load.image('btn_ecg', 'assets/btn_ecg.png');
        this.load.image('btn_xray', 'assets/btn_xray.png');
        this.load.image('btn_other', 'assets/btn_other.png');
        this.load.image('btn_diagnosis', 'assets/btn_diagnosis.png');
        this.load.image('myBackIcon', 'assets/myBackIcon.png');

        // Diagnosis Scene 
        this.load.image('DiagnosisBG', 'assets/diagnosis_bg.png');
        this.load.image('btn_submit', 'assets/btn_submit.png');
        this.load.image('btn_disease_main', 'assets/btn_disease_main.png');
        this.load.image('btn_med_main', 'assets/btn_med_main.png');
        this.load.image('btn_patient_main', 'assets/btn_patient_main.png'); 

        // รูปโชว์
        this.load.image('img_ecg', 'assets/img_ecg.png');
        this.load.image('img_xray', 'assets/img_xray.png');
        this.load.image('img_other', 'assets/img_other.png');

        // เฉลย
        this.load.image('popupCorrect', 'assets/img/popup_correct.png');
        this.load.image('popupWrong', 'assets/img/popup_wrong.png');
        this.load.image('popupAnswer', 'assets/img/popup_answer.png');
        this.load.image('popupFinished', 'assets/popupFinished.png');

        this.load.image('btnReveal', 'assets/img/btn_reveal.png');
        this.load.image('btnRetry', 'assets/img/btn_retry.png');
        this.load.image('btnNext', 'assets/img/btn_next.png');
        this.load.image('btnBack', 'assets/img/btn_back.png');

        // Flow 2 (ตัวอย่าง — Flow 3-7 ต้องแก้เหมือนกัน)
        this.load.image('patient_bg2', 'assets/patient_bg_2.png');
        this.load.image('img_ecg2', 'assets/img_ecg_2.png');
        this.load.image('img_xray2', 'assets/img_xray_2.png');
        this.load.image('img_other2', 'assets/img_other_2.png');
        this.load.image('popupAnswer2', 'assets/popupAnswer_2.png');
// Flow 3
this.load.image('patient_bg3', 'assets/patient_bg3.png');
this.load.image('img_ecg3', 'assets/img_ecg3.png');
this.load.image('img_xray3', 'assets/img_xray3.png');
this.load.image('img_other3', 'assets/img_other3.png');
this.load.image('popupAnswer3', 'assets/popupAnswer3.png');

// Flow 4
this.load.image('patient_bg4', 'assets/patient_bg4.png');
this.load.image('img_ecg4', 'assets/img_ecg4.png');
this.load.image('img_xray4', 'assets/img_xray4.png');
this.load.image('img_other4', 'assets/img_other4.png');
this.load.image('popupAnswer4', 'assets/popupAnswer4.png');

// Flow 5
this.load.image('patient_bg5', 'assets/patient_bg5.png');
this.load.image('img_ecg5', 'assets/img_ecg5.png');
this.load.image('img_xray5', 'assets/img_xray5.png');
this.load.image('img_other5', 'assets/img_other5.png');
this.load.image('popupAnswer5', 'assets/popupAnswer5.png');

// Flow 6
this.load.image('patient_bg6', 'assets/patient_bg6.png');
this.load.image('img_ecg6', 'assets/img_ecg6.png');
this.load.image('img_xray6', 'assets/img_xray6.png');
this.load.image('img_other6', 'assets/img_other6.png');
this.load.image('popupAnswer6', 'assets/popupAnswer6.png');

// Flow 7
this.load.image('patient_bg7', 'assets/patient_bg7.png');
this.load.image('img_ecg7', 'assets/img_ecg7.png');
this.load.image('img_xray7', 'assets/img_xray7.png');
this.load.image('img_other7', 'assets/img_other7.png');
this.load.image('popupAnswer7', 'assets/popupAnswer7.png');

    // เสียง
       this.load.audio('bgm', 'assets/audio/bgm.mp3');
       this.load.audio('clickSound', 'assets/audio/click.mp3');
       this.load.audio('correctSound', 'assets/audio/correct.mp3');
    }
     
      
   create() {
    // Background เมนู
    this.background = this.add.image(0,0,'background').setOrigin(0,0);
    this.background.displayWidth = this.sys.game.config.width;
    this.background.displayHeight = this.sys.game.config.height;

    // ตัวละคร
    this.character = this.add.image(
        this.sys.game.config.width*0.78,
        this.sys.game.config.height*-0.5,
        'character'
    ).setScale(0.10);

    // START button
    let startButton = this.add.image(
        this.sys.game.config.width/2,
        this.sys.game.config.height-150,
        'startButton'
    ).setOrigin(0.5).setInteractive();

    let scaleFactor = (this.sys.game.config.height*0.3)/640;
    startButton.setScale(scaleFactor);

    // ✅ รวมเป็น pointerup เดียว
    startButton.on('pointerup',()=>{
        // เล่น bgm หลังจากกดปุ่ม Start (iOS friendly)
        if(!this.sound.get('bgm')){
            this.bgm = this.sound.add('bgm',{loop:true, volume:0.5});
            this.bgm.play();
            this.sound.pauseOnBlur = false;
        }

        this.scene.start('GameBackgroundScene');
        startButton.destroy();
        this.character.destroy();
    });

    startButton.on('pointerover',()=> startButton.setTint(0xaaaaaa));
    startButton.on('pointerout',()=>{
        startButton.clearTint();
        startButton.setScale(scaleFactor);
    });
}

update() {
    if(this.character) this.character.y = this.sys.game.config.height*0.5 + Math.sin(t)*10;
    t += 0.05;
}
}

// ---------------- GameBackgroundScene ----------------
class GameBackgroundScene extends Phaser.Scene {
    constructor(){ super('GameBackgroundScene'); }

    create(){
        // Background
        this.background = this.add.image(0,0,'gameBackground').setOrigin(0,0);
        this.background.displayWidth = this.sys.game.config.width;
        this.background.displayHeight = this.sys.game.config.height;

        // Guard
        this.guard = this.add.image(
            this.sys.game.config.width*0.28,
            this.sys.game.config.height*0.7,
            'guard'
        ).setScale(0.17);

        // Banner
        this.banner = this.add.image(-300,50,'banner').setOrigin(0,0.49).setScale(0.15);

        // Medical Button
        let medicalButton = this.add.image(
            this.sys.game.config.width/2,
            this.sys.game.config.height-140,
            'medicalButton'
        )
        .setOrigin(0.5).setInteractive().setScale(0.08);

        addButtonEffect(this,medicalButton,0.08);

        medicalButton.on('pointerup',()=>{
            let medicalPopup = this.add.container(
                this.sys.game.config.width/2,
                this.sys.game.config.height/1.6
            )
            .setDepth(2)
            .setScale(0); // เริ่มเล็กเพื่อให้ tween เด้งเข้า

            let popupBg = this.add.image(0,0,'popupFrame').setOrigin(0.5);
            medicalPopup.add(popupBg);

            let dept1 = this.add.image(-314,-190,'deptA').setInteractive({pixelPerfect:true});
            addButtonEffect(this,dept1,1);
            medicalPopup.add(dept1);

            // ปุ่ม Back (ใส่ใน container เดียวกัน)
            let backBtn = this.add.image(595,-431,'myBackIcon') // ปรับตำแหน่งให้สัมพันธ์ popup
                .setOrigin(0.5)
                .setScale(0.03)
                .setInteractive();

            addButtonEffect(this, backBtn, 0.03);

            backBtn.on('pointerup', () => {
                medicalPopup.destroy(); // ปิด popup กลับไปหน้าเดิม
            });

            backBtn.on('pointerover', () => backBtn.setTint(0xaaaaaa));
            backBtn.on('pointerout', () => backBtn.clearTint());

            medicalPopup.add(backBtn);

            dept1.on('pointerup',()=>{
                medicalPopup.destroy();
                this.scene.start('PatientCheck');
            });

            // tween เด้งทั้ง popup พร้อม backBtn
            this.tweens.add({ 
                targets: medicalPopup, 
                scale:0.8, 
                duration:300, 
                ease:'Back.Out' 
            });
        });
    }

    update(){
        if(this.guard) this.guard.y = this.sys.game.config.height*0.7 + Math.sin(t)*5;
        if(this.banner){
            this.banner.x += bannerSpeed;
            if(this.banner.x > this.sys.game.config.width + 200) this.banner.x = -200;
        }
        t += 0.05;
    }
}

// ---------------- PatientCheck ----------------
class PatientCheck extends Phaser.Scene {
    constructor() { super({ key: 'PatientCheck' }); }

    create() {
        let popup = this.add.container(this.sys.game.config.width/2, this.sys.game.config.height/1.7)
            .setScale(0)
            .setDepth(11);

        let bg = this.add.image(0, 0, 'PatientCheckBG').setOrigin(0.5);
        popup.add(bg);

        // ปุ่มตรวจ (แทน patientImage)
        let patientBtn = this.add.text(0, 0, "ตรวจผู้ป่วย", { font: "32px Arial", fill: "#935b06ff"})
            .setOrigin(0.5)
            .setInteractive();

        addButtonEffect(this, patientBtn, 1);
        popup.add(patientBtn);

        patientBtn.on('pointerup', () => {
            this.scene.start('DiagnosisScene', { flowIndex: 0 }); // Flow 1 = index 0
        });

        // ปุ่ม Back อยู่ใน popup ด้วย
        let backBtn = this.add.image(620, -420, 'myBackIcon') // ตำแหน่ง relative กับ popup
            .setOrigin(0.5)
            .setScale(0.03)
            .setInteractive();

        popup.add(backBtn); // ✅ ใส่เข้า popup container

        backBtn.on('pointerup', () => {
            this.scene.start('GameBackgroundScene');
        });

        backBtn.on('pointerover', () => backBtn.setTint(0xaaaaaa));
        backBtn.on('pointerout', () => backBtn.clearTint());

        // ✅ Tween เด้ง popup + backBtn พร้อมกัน
        this.tweens.add({
            targets: popup,
            scale: 0.9,
            duration: 300,
            ease: 'Back.Out'
        });
    }
}

// ---------------- DiagnosisScene ----------------
class DiagnosisScene extends Phaser.Scene {
    constructor() {
        super('DiagnosisScene');
        this.flowIndex = 0; // เริ่ม Flow แรก
    }

    init(data) {
        if (data.flowIndex !== undefined) this.flowIndex = data.flowIndex;
    }

    create() {
        this.loadFlow(this.flowIndex);
    }

    loadFlow(index) {
        const config = flowConfigs[index];

        // Background
        let centerX = this.cameras.main.centerX;
        let centerY = this.cameras.main.centerY;
        let bg = this.add.image(centerX, centerY, config.bg).setOrigin(0.5);
        let scaleX = this.sys.game.config.width / bg.width;
        let scaleY = this.sys.game.config.height / bg.height;
        let scale = Math.min(scaleX, scaleY) * 1.4;
        bg.setScale(scale);
        bg.y += 66;

        // === ECG/X-Ray/Other ===
        this.resultImages = {
    ecg: this.add.image(centerX + 117, centerY, config.ecg).setVisible(false).setScale(0.93),
    xray: this.add.image(centerX + 117, centerY, config.xray).setVisible(false).setScale(0.93),
    other: this.add.image(centerX + 117, centerY, config.other).setVisible(false).setScale(0.93),
    
};
let currentShown = null;

// 🔹 ฟังก์ชันช่วยซ่อนรูปทั้งหมด & toggle
const hideAll = () => Object.values(this.resultImages).forEach(img => img.setVisible(false));
const toggleResult = (key) => {
    if(currentShown === key){ 
        hideAll(); 
        currentShown = null; 
    } else { 
        hideAll(); 
        this.resultImages[key].setVisible(true); 
        currentShown = key; 
    }
};

// Buttons
const btnScale = 0.0272;
const ecgBtn = this.add.image(centerX + 497, centerY - 229, 'btn_ecg').setInteractive().setScale(btnScale);
const xrayBtn = this.add.image(centerX + 497, centerY - 6, 'btn_xray').setInteractive().setScale(btnScale);
const otherBtn = this.add.image(centerX + 497, centerY + 218, 'btn_other').setInteractive().setScale(btnScale);
[ecgBtn, xrayBtn, otherBtn].forEach(btn => addButtonEffect(this, btn, btnScale));

// 🔹 Bind ปุ่ม หลังประกาศ toggleResult
ecgBtn.on('pointerup', () => toggleResult("ecg"));
xrayBtn.on('pointerup', () => toggleResult("xray"));
otherBtn.on('pointerup', () => toggleResult("other"));

        // === Diagnosis Button ===
        let diagnosisBtn = this.add.image(centerX + 117, centerY + 261, 'btn_diagnosis')
            .setInteractive().setScale(0.15);
        addButtonEffect(this, diagnosisBtn, 0.15);
        diagnosisBtn.on('pointerup', () => this.showDiagnosis(config));

 // แทนที่ backBtn เป็นภาพ
let backBtn = this.add.image(1352, 28, 'myBackIcon')
    .setOrigin(0.5)
    .setScale(0.03)
    .setInteractive();

// ✅ ทำให้ backBtn อยู่บนสุดตลอด
backBtn.setScrollFactor(0); 
backBtn.setDepth(9999);  // ความลึกสูงสุด

// คลิกกลับ
backBtn.on('pointerup', () => {
    // รีเซตกลับไป GameBackgroundScene
    this.scene.stop('DiagnosisScene');
    this.scene.start('GameBackgroundScene');
});

// เอฟเฟกต์ hover
backBtn.on('pointerover', () => backBtn.setTint(0xaaaaaa));
backBtn.on('pointerout', () => backBtn.clearTint());
}

    showDiagnosis(config) {
    let centerX = this.cameras.main.centerX;
    let centerY = this.cameras.main.centerY;
    const btnScale = 0.0186;

    // background
    let bg = this.add.image(centerX, centerY, 'DiagnosisBG').setOrigin(0.5);
    let scaleX = this.sys.game.config.width / bg.width;
    let scaleY = this.sys.game.config.height / bg.height;
    let scale = Math.min(scaleX, scaleY) * 1.4;
    bg.setScale(scale);
    bg.y += 66;

    // ==================== Disease Options ====================
    let diseaseBtn = this.add.image(centerX - 476, 58, 'btn_disease_main')
        .setInteractive().setScale(btnScale);
    addButtonEffect(this, diseaseBtn, btnScale);

    this.selectedDiseases = [];
    this.diseaseOptions = [];
    config.diseases.forEach((d, i) => {
        let option = this.add.text(centerX - 420 - 85, 280 + i*40 - 150, d, { font: "20px Arial", fill: "#beaf26ff" })
            .setPadding(5)
            .setInteractive({ useHandCursor: true })
            .setDepth(10)
            .setVisible(false);

        // ✅ Hover effect
          option.on('pointerover', () => option.setStyle({ fill: "#f8f695ff" }));
          option.on('pointerout', () => option.setStyle({ fill: "#beaf26ff" }));

        option.on('pointerup', () => {
            if (this.selectedDiseases.includes(d)) this.selectedDiseases = this.selectedDiseases.filter(x => x !== d);
            else this.selectedDiseases.push(d);
            this.updateCenterDisplay();
        });
        this.diseaseOptions.push(option);
    });

    diseaseBtn.on('pointerup', () => {
        let visible = !this.diseaseOptions[0].visible;
        this.diseaseOptions.forEach(opt => opt.setVisible(visible));
        // ซ่อน Medicine ถ้าเปิด Disease
        if (visible) this.medOptions?.forEach(opt => opt.setVisible(false));
    });

    // ==================== Medicine Options ====================
    let medBtn = this.add.image(centerX - 323, 58, 'btn_med_main')
        .setInteractive().setScale(btnScale);
    addButtonEffect(this, medBtn, btnScale);

    this.selectedMedicines = [];
    this.medOptions = [];
    config.medicines.forEach((m, i) => {
        let option = this.add.text(centerX - 415 - 85, 280 + i*40 - 150, m, { font: "20px Arial", fill: "#beaf26ff" })
            .setPadding(5)
            .setInteractive({ useHandCursor: true })
            .setDepth(10)
            .setVisible(false);

         // ✅ Hover effect
    option.on('pointerover', () => option.setStyle({ fill: "#f8f695ff" }));
    option.on('pointerout', () => option.setStyle({ fill: "#beaf26ff" }));

        option.on('pointerup', () => {
            if (this.selectedMedicines.includes(m)) this.selectedMedicines = this.selectedMedicines.filter(x => x !== m);
            else this.selectedMedicines.push(m);
            this.updateCenterDisplay();
        });
        this.medOptions.push(option);
    });

    medBtn.on('pointerup', () => {
        let visible = !this.medOptions[0].visible;
        this.medOptions.forEach(opt => opt.setVisible(visible));
        // ซ่อน Disease ถ้าเปิด Medicine
        if (visible) this.diseaseOptions?.forEach(opt => opt.setVisible(false));
    });

    // ==================== Patient Button ====================
    let patientBtn = this.add.image(centerX - 171, 58, 'btn_patient_main').setInteractive().setScale(btnScale);
    addButtonEffect(this, patientBtn, btnScale);
    patientBtn.on('pointerup', () => this.scene.start('DiagnosisScene', { flowIndex: this.flowIndex }));

    // ==================== Submit Button ====================
    let submitBtn = this.add.image(centerX + 160, 579, 'btn_submit').setInteractive().setScale(0.15);
    addButtonEffect(this, submitBtn, 0.15);
    submitBtn.on('pointerup', () => this.checkAnswer(config));

    // ==================== Update Center Display ====================
    this.updateCenterDisplay = () => {
        if (this.resultTextGroup) this.resultTextGroup.forEach(t => t.destroy());
        this.resultTextGroup = [];

        // โรค
        let offsetX = 0;
        this.selectedDiseases.forEach(d => {
            let t = this.add.text(centerX - 82 + offsetX, centerY - 52, d, { font: "24px Arial", fill: "#b89e0bff" }).setOrigin(0, 2);
            this.resultTextGroup.push(t);
            offsetX += t.width + 10;
        });

        // ยา
        offsetX = 0;
        this.selectedMedicines.forEach(m => {
            let t = this.add.text(centerX - 59 + offsetX, centerY - 5, m, { font: "24px Arial", fill: "#b89e0bff" }).setOrigin(0, 1);
            this.resultTextGroup.push(t);
            offsetX += t.width + 10;
        });
    };
}


// ================== checkAnswer ==================
checkAnswer(config) { 
    const selectedDiseases = this.selectedDiseases || [];
    const selectedMedicines = this.selectedMedicines || [];

    const correctDiseases = config.correctDiseases;
    const correctMedicines = config.correctMedicines;

    const diseaseCorrect = correctDiseases.every(d => selectedDiseases.includes(d)) &&
                           selectedDiseases.every(d => correctDiseases.includes(d));

    const medicinesCorrect = correctMedicines.every(m => selectedMedicines.includes(m)) &&
                             selectedMedicines.every(m => correctMedicines.includes(m));

    const isCorrect = diseaseCorrect && medicinesCorrect;

    const centerX = this.cameras.main.centerX;
    const centerY = this.cameras.main.centerY;

    // ================== popup ถูกผิด ==================
    let popupImg = this.add.image(0, 0, isCorrect ? "popupCorrect" : "popupWrong");
    popupImg.setScale(0.6);
    popupImg.setOrigin(0.5);
    // === เล่นเสียงตอน popup โผล่ ===
if (isCorrect) {
    this.sound.play('correctSound', { volume: 1 });
} 

    let revealBtn = this.add.image(25, 35, "btnReveal").setInteractive().setScale(0.01);
    let retryBtn  = this.add.image(100, 35, "btnRetry").setInteractive().setScale(0.01);
    let nextBtn   = this.add.image(170, 70, "btnNext").setInteractive().setScale(0.01);

    [revealBtn, retryBtn, nextBtn].forEach(btn => addButtonEffect(this, btn, btn.scaleX));

    let popupGroup = this.add.container(centerX, centerY, [popupImg, revealBtn, retryBtn, nextBtn]);
    popupGroup.setDepth(10);

    // --- ปุ่มเฉลย ---
    revealBtn.on('pointerup', () => {
        popupImg.setTexture(config.popupAnswer);  
        popupImg.setScale(0.92);
        popupGroup.y += 60;

        revealBtn.setVisible(false);
        retryBtn.setVisible(false);
        nextBtn.setVisible(false);

        let backBtn = this.add.image(5, 200, "btnBack").setInteractive().setScale(0.02);
        popupGroup.add(backBtn);
        addButtonEffect(this, backBtn, 0.02);

        backBtn.on('pointerup', () => {
            popupImg.setTexture(isCorrect ? "popupCorrect" : "popupWrong");
            popupImg.setScale(0.6);
            popupGroup.y -= 60;
            revealBtn.setVisible(true);
            retryBtn.setVisible(true);
            nextBtn.setVisible(true);
            backBtn.destroy();
        });
    });

    // --- ปุ่มเล่นอีกรอบ ---
    retryBtn.on('pointerup', () => {
        popupGroup.destroy();
        if(this.diseaseOptions) this.diseaseOptions.forEach(opt => opt.setVisible(false));
        if(this.medOptions) this.medOptions.forEach(opt => opt.setVisible(false));
        this.selectedDiseases = [];
        this.selectedMedicines = [];
        this.scene.start('DiagnosisScene', { flowIndex: this.flowIndex });
    });

    // --- ปุ่มถัดไป ---
    nextBtn.on('pointerup', () => {
        popupGroup.destroy();
        const nextIndex = this.flowIndex + 1;

        if(nextIndex < flowConfigs.length){
            // ด่านปกติ → ไป Flow ถัดไป
            this.scene.start('DiagnosisScene', { flowIndex: nextIndex });
        } else {
            // ================== ด่านสุดท้าย ==================
            let finishedPopupImg = this.add.image(0, 0, 'popupFinished') // ใช้ key ของ popup ที่คุณออกแบบ
                .setOrigin(0.5)
                .setScale(0.92);

            let closeBtn = this.add.image(170, 70, 'btnNext') // ใช้ปุ่ม Next หรือปุ่มปิดตามดีไซน์
                .setOrigin(0.5)
                .setInteractive()
                .setScale(0.02);

            addButtonEffect(this, closeBtn, closeBtn.scaleX);

            let finishedPopupGroup = this.add.container(centerX, centerY, [finishedPopupImg, closeBtn])
                .setDepth(10)
                .setScale(0);

            this.tweens.add({
                targets: finishedPopupGroup,
                scale: 0.8,
                duration: 300,
                ease: 'Back.Out'
            });

            closeBtn.on('pointerup', () => {
                finishedPopupGroup.destroy();
                this.scene.start('GameBackgroundScene'); 
            });
        }
    });
}
}

let config = {
    type: Phaser.AUTO,
    width: window.innerWidth,
    height: window.innerHeight,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    scene: [ MainMenu, GameBackgroundScene, PatientCheck, DiagnosisScene ]
};

game = new Phaser.Game(config);

// -------- ฟังก์ชันเอฟเฟกต์ปุ่ม --------
function addButtonEffect(scene, button, scaleFactor) {
    // hover → เทา
    button.on('pointerover', () => {
        button.setTint(0xaaaaaa);
    });

    // ออก → กลับปกติ
    button.on('pointerout', () => {
        button.clearTint();
        if (scaleFactor) button.setScale(scaleFactor);
    });

    // คลิก → เด้งเล็กน้อย + เล่นเสียง
    button.on('pointerdown', () => {
        if (scaleFactor) button.setScale(scaleFactor * 0.9);
        scene.sound.play('clickSound', { volume: 0.7 }); // เล่นเสียงที่นี่
    });

    // ปล่อย → กลับขนาดปกติ
    button.on('pointerup', () => {
        if (scaleFactor) button.setScale(scaleFactor);
    });
}

