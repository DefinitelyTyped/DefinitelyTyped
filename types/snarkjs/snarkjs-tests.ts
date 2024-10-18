import {
    CircuitSignals,
    fflonk,
    FflonkProof,
    groth16,
    Groth16Proof,
    plonk,
    PlonkProof,
    powersOfTau,
    PublicSignals,
    r1cs,
    wtns,
    zKey,
} from "snarkjs";

const any = "any";
const fileName = "file-name";
const publicSignals: PublicSignals = ["1", "2", "3"];
const circuitSignals: CircuitSignals = {
    par1: "1",
    par2: [1, 2],
};

// ### groth16

const groth16Proof: Groth16Proof = {
    pi_a: [
        "7621391638232701028311749149306252286484022880720863355144424091809770837845",
        "18031124733125403956205180175600893346476884984077035959503030217599824767276",
        "1",
    ],
    pi_b: [
        [
            "15921218298756772690461553059211934327612952216145378503586955335127446641946",
            "20689450983287774542643580604740200472450262656678782551619601845304615843187",
        ],
        [
            "4311399894681020269387769602114761552697495418413975900824675269862256949137",
            "10623711558121431456331228648822017265323308960640188532649905281150450539638",
        ],
        ["1", "0"],
    ],
    pi_c: [
        "15997785119637066744261464048684275728240880952319822538735200602700978459195",
        "18398078888784952016395823988302318079519791320116768209972217959131688401046",
        "1",
    ],
    protocol: "groth16",
    curve: "bn128",
};

// $ExpectType Promise<{ proof: Groth16Proof; publicSignals: PublicSignals; }>
groth16.prove(fileName, any, any);
groth16.prove(fileName, any);

// $ExpectType Promise<string>
groth16.exportSolidityCallData(groth16Proof, publicSignals);

// $ExpectType Promise<{ proof: Groth16Proof; publicSignals: PublicSignals; }>
groth16.fullProve(circuitSignals, fileName, fileName, any);
groth16.fullProve(circuitSignals, fileName, any);

// $ExpectType Promise<boolean>
groth16.verify(any, publicSignals, groth16Proof, any);
groth16.verify(any, publicSignals, groth16Proof);

// ### fflonk

const fflonkProof: FflonkProof = {
    polynomials: {
        C1: [
            "12029505231622214875700229618619586000847840187802035080358636532097931660155",
            "5263748208311987124929792928177628220944288688211176639489026357123044285990",
            "1",
        ],
        C2: [
            "18792641945889849707617074971748978928544751577915464488366355100260938129833",
            "6049895154709173669766647955039167754873539429312636202764402969019137478881",
            "1",
        ],
        W1: [
            "15783538063114971761539584274085960008890509443622412340043619350035615097624",
            "15589914908183373611109564304130190544978911390797643518574032484845647550627",
            "1",
        ],
        W2: [
            "20431083063773244505387160307430745682163482026839464982009711025420125588136",
            "11806973428288806331124047946835597863174898819790972723896395951609522731238",
            "1",
        ],
    },
    evaluations: {
        ql: "15931456359911479365198511791168340518976881269852634192196478668516571844092",
        qr: "10283556308142308497516304255461952025668444562039089642255328887688350193012",
        qm: "8642957322993718703520513185592823213764327106259175778313579959168008565167",
        qo: "2040585406965590222799495139926335138117413465164129727767366527764716213357",
        qc: "0",
        s1: "8859882769878183865133435616846329537230775095238074339704219491766400410150",
        s2: "13206844955964277210543644920091298588542317436096745186533118472906823493945",
        s3: "14321825166610379041918267715299846878391590801578878849368428012600536929766",
        a: "11277436439392434033722733473979028325897423291947773577032990100504581267756",
        b: "3275345447684859443037390283001637243038179485970672089239934894295670249136",
        c: "20721998611745583700969655647371705460487741644539886793440427543242708040857",
        z: "14026229189358291384835713202249540460446500633767012804700537335533329429820",
        zw: "16039195819240218792550863113655640627225981586331859494463597232075082566844",
        t1w: "20078401804121194123242394082219174952393177196623077442326143817606687849961",
        t2w: "4303288035805435463344092725485606728244721073279144519833520148540555555820",
        inv: "21809335832495774528351159425277521511003024436993953641525618046372209016874",
    },
    protocol: "fflonk",
    curve: "bn128",
};

// $ExpectType Promise<{ proof: FflonkProof; publicSignals: PublicSignals; }>
fflonk.prove(fileName, any, any);
fflonk.prove(fileName, any);

// $ExpectType Promise<any>
fflonk.exportSolidityVerifier(any, any, any);
fflonk.exportSolidityVerifier(any, any);

// $ExpectType Promise<string>
fflonk.exportSolidityCallData(publicSignals, fflonkProof);

// $ExpectType Promise<{ proof: FflonkProof; publicSignals: PublicSignals; }>
fflonk.fullProve(circuitSignals, fileName, fileName, any);
fflonk.fullProve(circuitSignals, fileName, fileName);

// $ExpectType Promise<0>
fflonk.setup(fileName, fileName, fileName, any);
fflonk.setup(fileName, fileName, fileName);

// $ExpectType Promise<boolean>
fflonk.verify(any, publicSignals, fflonkProof, any);
fflonk.verify(any, publicSignals, fflonkProof);

// ### plonk

const plonkProof: PlonkProof = {
    A: [
        "11421767280707102555448406952122517081075080756092511279912203502073319679894",
        "2177105660712696792025857967132033173883946567276990178795722158400179509501",
        "1",
    ],
    B: [
        "5756332991093465169264636408119633762858940781261066311788636462431333904974",
        "9172371351613206020335191013083348244769416997909815054074890654179408284105",
        "1",
    ],
    C: [
        "15128350518109117649874295228899944244334587960831359399878109987308524741504",
        "6266449274823553983286096323479629036484385339035622572740886089758966380861",
        "1",
    ],
    Z: [
        "19512362421639807173960147214513107741060702959835359723799670705721578906650",
        "16216421757549508224514898271484387173258209792094263281226649094034122468267",
        "1",
    ],
    T1: [
        "1371975184023569999710837731434097267111830509129624746390549808375866111317",
        "8454341126646851822853483075697643364210581970595402218036120245014886569755",
        "1",
    ],
    T2: [
        "14015574519140866192005633599525630920034094641704779856389799516770410729690",
        "16115522306410741700370899431578494120058348200942916812616202533669183889092",
        "1",
    ],
    T3: [
        "10993376068925545053210324538150950856005786094532921341095990678579032238171",
        "7213602713768676141856521354481945616825295350060788814385466346288282987574",
        "1",
    ],
    Wxi: [
        "9615771019000899416956322259895413867273626912709148782874348455714606782455",
        "20978517744170998018216586996683402470014384421401860479435963432037099739236",
        "1",
    ],
    Wxiw: [
        "18230074007226983563608954519924834504949137781667448756869734675169638547490",
        "1168870585520109163056123350397642124658480975926095516531799925378640165121",
        "1",
    ],
    eval_a: "3633700439907912465639438081415064618689525451632802528313216378702618783050",
    eval_b: "9266680075529596042120981194076514145733226195308488982210692782199854920228",
    eval_c: "11108443298619376802840859364148255754798234269732411912386366080964125473982",
    eval_s1: "979333877398830052547900274017506995596964833187983525661303685186244579490",
    eval_s2: "21443594391826970778175657320856415823268100462784076904799758237152719763447",
    eval_zw: "18406662926608046172692961509498301086368998024264748619459902470430300626404",
    protocol: "plonk",
    curve: "bn128",
};

// $ExpectType Promise<{ proof: PlonkProof; publicSignals: PublicSignals; }>
plonk.prove(fileName, any, any);
plonk.prove(fileName, any);

// $ExpectType Promise<string>
plonk.exportSolidityCallData(plonkProof, publicSignals);

// $ExpectType Promise<{ proof: PlonkProof; publicSignals: PublicSignals; }>
plonk.fullProve(circuitSignals, fileName, fileName, any);
plonk.fullProve(circuitSignals, fileName, fileName);

// $ExpectType Promise<void>
plonk.setup(fileName, fileName, fileName, any);
plonk.setup(fileName, fileName, fileName);

// $ExpectType Promise<boolean>
plonk.verify(any, publicSignals, plonkProof, any);
plonk.verify(any, publicSignals, plonkProof);

// ### r1cs

// $ExpectType Promise<object>
r1cs.exportJson(fileName, any);
r1cs.exportJson(fileName);

// $ExpectType Promise<R1CSInfoType>
r1cs.info(fileName, any);
r1cs.info(fileName);

// $ExpectType void
r1cs.print(any, any, any);
r1cs.print(any, any);

// ### wtns

// $ExpectType Promise<object>
wtns.exportJson(fileName);

// $ExpectType Promise<void>
wtns.calculate(circuitSignals, any, any);

// $ExpectType Promise<any>
wtns.check(any, any, any);
wtns.check(any, any);

// $ExpectType Promise<void>
wtns.debug(circuitSignals, any, any, any, any, any);
wtns.debug(circuitSignals, any, any, any, any);

// ### powersOfTau

// $ExpectType Promise<object>
powersOfTau.exportJson(any, true);
powersOfTau.exportJson(any);

// $ExpectType Promise<boolean>
powersOfTau.verify(any, any, any, any);
powersOfTau.verify(any, any, any);

// $ExpectType Promise<any>
powersOfTau.beacon(any, any, fileName, "str", 3, any);
powersOfTau.beacon(any, any, fileName, "str", "3", any);
powersOfTau.beacon(any, any, fileName, "str", 3);

// $ExpectType Promise<void>
powersOfTau.challengeContribute(any, any, any, any, any);
powersOfTau.challengeContribute(any, any, any, any);

// $ExpectType Promise<any>
powersOfTau.contribute(any, any, fileName, any, any);
powersOfTau.contribute(any, any, fileName, any);

// $ExpectType Promise<any>
powersOfTau.exportChallenge(any, any, any);
powersOfTau.exportChallenge(any, any);

// $ExpectType Promise<any>
powersOfTau.importResponse(any, any, any, fileName, any, any);
powersOfTau.importResponse(any, any, any, fileName, any);
powersOfTau.importResponse(any, any, any, fileName);
powersOfTau.importResponse(any, any, any);

// $ExpectType Promise<void>
powersOfTau.convert(any, any, any);
powersOfTau.convert(any, any);

// $ExpectType Promise<any>
powersOfTau.newAccumulator(any, 3, any, any);
powersOfTau.newAccumulator(any, 4, any);

// $ExpectType Promise<void>
powersOfTau.preparePhase2(any, any, any);
powersOfTau.preparePhase2(any, any);

// $ExpectType Promise<any>
powersOfTau.truncate(any, any, any);
powersOfTau.truncate(any, any);

// ### zKey

// $ExpectType Promise<object>
zKey.exportJson(any);

// $ExpectType Promise<any>
zKey.beacon(any, any, fileName, "str", 3, any);
zKey.beacon(any, any, fileName, "str", "3", any);
zKey.beacon(any, any, fileName, "str", 3);

// $ExpectType Promise<any>
zKey.contribute(any, any, fileName, any, any);
zKey.contribute(any, any, fileName, any);

// $ExpectType Promise<any>
zKey.bellmanContribute(any, any, any, any, any);
zKey.bellmanContribute(any, any, any, any);

// $ExpectType Promise<void>
zKey.exportBellman(any, any, any);
zKey.exportBellman(any, any);

// $ExpectType Promise<any>
zKey.exportSolidityVerifier(any, any, any);
zKey.exportSolidityVerifier(any, any);

// $ExpectType Promise<any>
zKey.importBellman(any, any, any, fileName, any);
zKey.importBellman(any, any, any, fileName);
zKey.importBellman(any, any, any);

// $ExpectType Promise<any>
zKey.exportVerificationKey(any, any);
zKey.exportVerificationKey(any);

// $ExpectType Promise<any>
zKey.newZKey(any, any, any, any);
zKey.newZKey(any, any, any);

// $ExpectType Promise<boolean>
zKey.verifyFromInit(any, any, any, any);
zKey.verifyFromInit(any, any, any);

// $ExpectType Promise<boolean>
zKey.verifyFromR1cs(any, any, any, any);
zKey.verifyFromR1cs(any, any, any);
