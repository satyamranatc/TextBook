import React, { useState, useEffect } from "react";
import "./Practice.css"

export default function Practice({ CourseData }) {
  const [CourseCategory, setCourseCategory] = useState([]);
  const [QuizQuestions, setQuizQuestions] = useState([]);
  const [UserAnswers, setUserAnswers] = useState({});
  const [TotalScore, setTotalScore] = useState(0);

  const MCQ = {
    Math: [
      {
        question: "What is the slope of a line perpendicular to y = 2x + 3?",
        options: ["2", "-2", "1/2", "-1/2"],
        correctAnswer: "-1/2",
      },
      {
        question: "Solve for x: 2x^2 - 8x + 8 = 0",
        options: ["2 and 2", "2 and 4", "1 and 3", "0 and 4"],
        correctAnswer: "2 and 2",
      },
      {
        question: "What is the value of sin(30°)?",
        options: ["1/4", "1/2", "√3/2", "1/√2"],
        correctAnswer: "1/2",
      },
      {
        question: "If f(x) = x^2 + 3x + 2, what is f'(x)?",
        options: ["2x + 3", "x^2 + 3", "2x", "x + 3"],
        correctAnswer: "2x + 3",
      },
      {
        question: "What is the area of a circle with radius 5 units?",
        options: ["25π", "10π", "15π", "20π"],
        correctAnswer: "25π",
      },
      {
        question: "Simplify: log₂(8)",
        options: ["2", "3", "4", "8"],
        correctAnswer: "3",
      },
      {
        question: "What is the sum of the interior angles of a hexagon?",
        options: ["540°", "600°", "720°", "1080°"],
        correctAnswer: "720°",
      },
      {
        question:
          "If P(A) = 0.3 and P(B) = 0.4, what is P(A or B) if A and B are mutually exclusive?",
        options: ["0.12", "0.7", "0.5", "0.3"],
        correctAnswer: "0.7",
      },
      {
        question: "What is the solution to the equation |2x - 6| = 8?",
        options: [
          "x = 1 or x = 7",
          "x = -1 or x = 7",
          "x = 2 or x = 5",
          "x = -2 or x = 5",
        ],
        correctAnswer: "x = 1 or x = 7",
      },
      {
        question: "What is the value of i^4, where i is the imaginary unit?",
        options: ["i", "-i", "1", "-1"],
        correctAnswer: "1",
      },
    ],
    Physics: [
      {
        question: "What is the SI unit of force?",
        options: ["Watt", "Joule", "Newton", "Pascal"],
        correctAnswer: "Newton",
      },
      {
        question: "Which of these is not a fundamental force of nature?",
        options: [
          "Gravity",
          "Electromagnetism",
          "Strong nuclear force",
          "Friction",
        ],
        correctAnswer: "Friction",
      },
      {
        question: "What is the speed of light in vacuum?",
        options: [
          "3 x 10^8 m/s",
          "3 x 10^6 m/s",
          "3 x 10^7 m/s",
          "3 x 10^9 m/s",
        ],
        correctAnswer: "3 x 10^8 m/s",
      },
      {
        question: "What is the formula for kinetic energy?",
        options: ["KE = mgh", "KE = 1/2mv^2", "KE = Fd", "KE = mv"],
        correctAnswer: "KE = 1/2mv^2",
      },
      {
        question:
          "Which law of thermodynamics states that energy cannot be created or destroyed?",
        options: ["Zeroth law", "First law", "Second law", "Third law"],
        correctAnswer: "First law",
      },
      {
        question: "What is the unit of electric charge?",
        options: ["Ampere", "Volt", "Ohm", "Coulomb"],
        correctAnswer: "Coulomb",
      },
      {
        question:
          "What is the phenomenon called when light changes direction as it passes from one medium to another?",
        options: ["Reflection", "Refraction", "Diffraction", "Interference"],
        correctAnswer: "Refraction",
      },
      {
        question:
          "What is the name of the particle that carries electromagnetic force?",
        options: ["Photon", "Neutrino", "Gluon", "Graviton"],
        correctAnswer: "Photon",
      },
      {
        question: "What is the SI unit of pressure?",
        options: ["Newton", "Pascal", "Bar", "Atmosphere"],
        correctAnswer: "Pascal",
      },
      {
        question: "Which of these is a vector quantity?",
        options: ["Mass", "Temperature", "Velocity", "Time"],
        correctAnswer: "Velocity",
      },
    ],
    Chemistry: [
      {
        question: "What is the chemical symbol for gold?",
        options: ["Ag", "Au", "Cu", "Fe"],
        correctAnswer: "Au",
      },
      {
        question: "What is the pH of a neutral solution?",
        options: ["0", "7", "14", "1"],
        correctAnswer: "7",
      },
      {
        question: "Which of these is not a noble gas?",
        options: ["Helium", "Neon", "Argon", "Nitrogen"],
        correctAnswer: "Nitrogen",
      },
      {
        question: "What type of bond is formed by the sharing of electrons?",
        options: ["Ionic", "Covalent", "Metallic", "Hydrogen"],
        correctAnswer: "Covalent",
      },
      {
        question:
          "What is the most abundant element in the Earth's atmosphere?",
        options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
        correctAnswer: "Nitrogen",
      },
      {
        question: "What is the molecular formula of glucose?",
        options: ["C6H12O6", "C12H22O11", "CH3COOH", "NaHCO3"],
        correctAnswer: "C6H12O6",
      },
      {
        question: "Which of these is an example of an endothermic reaction?",
        options: [
          "Rusting of iron",
          "Burning of wood",
          "Photosynthesis",
          "Combustion of methane",
        ],
        correctAnswer: "Photosynthesis",
      },
      {
        question: "What is the charge of an electron?",
        options: ["Positive", "Negative", "Neutral", "Variable"],
        correctAnswer: "Negative",
      },
      {
        question:
          "What is the number of electrons in the outermost shell of a noble gas?",
        options: ["2", "4", "6", "8"],
        correctAnswer: "8",
      },
      {
        question: "Which of these is not a state of matter?",
        options: ["Solid", "Liquid", "Gas", "Energy"],
        correctAnswer: "Energy",
      },
    ],
    Biology: [
      {
        question: "What is the powerhouse of the cell?",
        options: ["Nucleus", "Mitochondria", "Ribosome", "Golgi apparatus"],
        correctAnswer: "Mitochondria",
      },
      {
        question: "Which of these is not a component of DNA?",
        options: ["Adenine", "Thymine", "Uracil", "Guanine"],
        correctAnswer: "Uracil",
      },
      {
        question: "What is the process by which plants make their own food?",
        options: [
          "Respiration",
          "Photosynthesis",
          "Fermentation",
          "Transpiration",
        ],
        correctAnswer: "Photosynthesis",
      },
      {
        question: "Which of these is not a type of blood cell?",
        options: [
          "Red blood cells",
          "White blood cells",
          "Platelets",
          "Nerve cells",
        ],
        correctAnswer: "Nerve cells",
      },
      {
        question: "What is the largest organ in the human body?",
        options: ["Heart", "Brain", "Liver", "Skin"],
        correctAnswer: "Skin",
      },
      {
        question: "Which of these is responsible for producing insulin?",
        options: ["Liver", "Kidneys", "Pancreas", "Spleen"],
        correctAnswer: "Pancreas",
      },
      {
        question: "What is the process of cell division called?",
        options: ["Meiosis", "Mitosis", "Cytokinesis", "Prophase"],
        correctAnswer: "Mitosis",
      },
      {
        question: "Which of these is not a part of the central nervous system?",
        options: ["Brain", "Spinal cord", "Nerves", "Cerebellum"],
        correctAnswer: "Nerves",
      },
      {
        question: "What is the basic unit of heredity?",
        options: ["Cell", "Chromosome", "Gene", "Nucleus"],
        correctAnswer: "Gene",
      },
      {
        question: "Which of these is not a type of muscle tissue?",
        options: [
          "Cardiac muscle",
          "Skeletal muscle",
          "Smooth muscle",
          "Connective tissue",
        ],
        correctAnswer: "Connective tissue",
      },
    ],
  };
  useEffect(() => {
    const categories = CourseData.map((e) => e.genere);
    setCourseCategory(categories);
  }, [CourseData]);

  const handleQuizSubject = (e) => {
    const selectedCategory = e.target.value;
    const questions = MCQ[selectedCategory];
    setQuizQuestions(questions);
  };

  const handleAnswerChange = (qIndex, answer) => {
    setUserAnswers({
      ...UserAnswers,
      [qIndex]: answer,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let score = 0;

    QuizQuestions.forEach((question, index) => {
      if (UserAnswers[index] === question.correctAnswer) {
        score++;
      
      }
    });
    setTotalScore(score);
   
  };

  return (
    <div className="practice-container">
      <select onChange={handleQuizSubject}>
        <option value="">Select Course Category</option>
        {CourseCategory.map((cat, index) => (
          <option key={index} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      <hr />

      {QuizQuestions.length > 0 && (
        <form onSubmit={handleSubmit}>
          <ol>
            {QuizQuestions.map((questions, qIndex) => (
              <li key={qIndex}>
                <h3>{questions.question}</h3>
                {questions.options.map((option, oIndex) => (
                  <label key={oIndex}>
                    <input
                      type="radio"
                      name={`question${qIndex}`}
                      value={option}
                      onChange={() => handleAnswerChange(qIndex, option)}
                    />
                    {option}
                  </label>
                ))}
              </li>
            ))}
          </ol>
          <button type="submit">Submit</button>
        </form>

      )}

    
        <center>
          <h2>Your Score: {TotalScore}</h2>
          
        </center>
    </div>
  );
}



