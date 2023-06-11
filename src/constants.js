export const jsQuiz = {
    questions: [
        {
            question: '_________ can be called also as Dynamic Polymorphism',
            type: 'FIB',
            correctAnswer : 'Method overriding',
        },
        {
            question: 'What is the runtime enviroment of .NET?',
            choices: [
                'CLR',
                'JDK',
                'WinRT',
                'Noone from above'
            ],
            type: 'MCQs',
            correctAnswer : 'CLR',
        },
        {
            question: 'What are the three main components of CLR (Common Language Runtime) ?',
            choices: [
                'CLI, GC, JIT',
                'JIT, JRE, JVM',
                'CLR does not have any components because it is a runtime enviroment',
                'PRR, LDC, SPP'
            ],
            type: 'MCQs',
            correctAnswer : 'CLI',
        },
        {
            question: 'What are the delegates in C#',
            choices: [
                'A delegate is a type that represents references to methods with a particular parameter list and return type',
                'Delegates serve the same purpose as function pointers in C and pointers to member function operators in C++',
                'A form of polymorphism',
                'Noone from above'
            ],
            type: 'MCQs',
            correctAnswer : 'A delegate is a type that represents references to methods with a particular parameter list and return type',
        }
    ]
};

export const resultInitalState = {
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0
};