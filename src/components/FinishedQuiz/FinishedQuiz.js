import React from 'react';
import cssCls from './FinishedQuiz.css';

const FinishedQuiz = props => {
    const successCount = Object.keys(props.results).reduce((acc, key) => {
        if (props.results[key] === 'success') {
            acc++;
        }
        return acc;
    }, 0);

    return(
        <div className={cssCls.FinishedQuiz}>
            <ul>
                {
                    props.quiz.map((quizItem, index) => {
                      let cls = [
                          'fa',
                          props.results[quizItem.id] === 'error' ? 'fa-times' : 'fa-check',
                          cssCls[props.results[quizItem.id]]
                      ];

                      return(
                          <li
                            key={index}
                          >
                              <strong>{index + 1}.</strong>&nbsp;
                              {quizItem.question}
                              <i className={cls.join(' ')} />
                          </li>
                      );
                    })
                }
            </ul>

            <p>Правильно {successCount} из {props.quiz.length}</p>

            <div>
                <button onClick={props.onRetry}>Повторить</button>
            </div>
        </div>
    );
};

export default FinishedQuiz;