
    var students =[{
        "name": "Ali Ben Zineb",
        "id": "S001",
        "marks": {
          "math": {
              "prof":"PM1",
              "note": 70, 
              "coef":4
          },
          "science": {
              "prof":"PS2",
              "note": 54, 
              "coef":2
          },
          "english": {
              "prof":"PE3",
              "note": 48, 
              "coef":1.5
          },
          "history": {
              "prof":"PH1",
              "note": 92, 
              "coef":1
          }
        }
      },
      {
        "name": "Mohamed Omrani",
        "id": "S002",
        "marks": {
          "math": {
              "prof":"PM2",
              "note": 90, 
              "coef":4
          },
          "science": {
              "prof":"PS2",
              "note": 83, 
              "coef":2
          },
          "english": {
              "prof":"PE1",
              "note": 74, 
              "coef":1.5
          },
          "history": {
              "prof":"PH2",
              "note": 95, 
              "coef":1
          }
        }
      },
      {
        "name": "Rida Jemmali",
        "id": "S003",
        "marks": {
          "math": {
              "prof":"PM1",
              "note": 78, 
              "coef":4
          },
          "science": {
              "prof":"PS1",
              "note": 95, 
              "coef":2
          },
          "english": {
              "prof":"PE1",
              "note": 88, 
              "coef":1.5
          },
          "history": {
              "prof":"PH1",
              "note": 82, 
              "coef":1
          }
        }
      },
      {
        "name": "Ferid Helali",
        "id": "S004",
        "marks": {
          "math": {
              "prof":"PM2",
              "note": 76, 
              "coef":4
          },
          "science": {
              "prof":"PS1",
              "note": 98, 
              "coef":2
          },
          "english": {
              "prof":"PE2",
              "note": 86, 
              "coef":1.5
          },
          "history": {
              "prof":"PH1",
              "note": 89, 
              "coef":1
          }
        }
      },
      {
        "name": "Mouez Ben Youssef",
        "id": "S005",
        "marks": {
          "math": {
              "prof":"PM1",
              "note": 98, 
              "coef":4
          },
          "science": {
              "prof":"PS2",
              "note": 65, 
              "coef":2
          },
          "english": {
              "prof":"PE3",
              "note": 47, 
              "coef":1.5
          },
          "history": {
              "prof":"PH1",
              "note": 80, 
              "coef":1
          }
        }
      }
    ]

    var new_students_state=students.map(function(student){
        let average=0;
        let coef_sum=0;
        //for(let i=0;i<student.marks.entries().length;i++)
        console.log(Object.values(student.marks))
        for(let mark of Object.values(student.marks)) {
            average += mark.coef*mark.note;
            coef_sum += coef_sum+mark.coef;    
        };

        student.average=average/coef_sum;

        return student
    })
console.table(new_students_state)
    
  