import React from 'react';
import { render } from 'react-dom';
import styled from 'styled-components';

const FirstAnswer = styled.td`
  text-align: right;
`;

const Questionnaire = (props) => {
  console.log(props);
  return (
    <div>
      <h2>Let's define your views!</h2>
      <p>Here are a few controversial issues to get you rolling. You can add more later</p>
      <form onSubmit={props.handleQuestionnaire}>
        <table>
          <tbody>
            <tr>
              <td colSpan="7"><b>Legalizing Marijuana</b></td>
            </tr>
            <tr>
              <FirstAnswer>
                It should be illegal.
              </FirstAnswer>
              <td>
                <input type="radio" value="legalize-weed-1" name="legalize-weed"/>
              </td>
              <td>
                <input type="radio" value="legalize-weed-2" name="legalize-weed"/>
              </td>
              <td>
                <input type="radio" value="legalize-weed-3" name="legalize-weed"/>
              </td>
              <td>
                <input type="radio" value="legalize-weed-4" name="legalize-weed"/>
              </td>
              <td>
                <input type="radio" value="legalize-weed-5" name="legalize-weed"/>
              </td>
              <td className="lastAnswer">
                Legalize it!
              </td>
            </tr>
            <tr>
              <td>
                <br/>
              </td>
            </tr>
            <tr>
              <td colSpan="7"><b>Gun Control Laws</b></td>
            </tr>
            <tr>
              <FirstAnswer>
                We need more.
              </FirstAnswer>
              <td>
                <input type="radio" value="gun-control-1" name="gun-control"/>
              </td>
              <td>
                <input type="radio" value="gun-control-2" name="gun-control"/>
              </td>
              <td>
                <input type="radio" value="gun-control-3" name="gun-control"/>
              </td>
              <td>
                <input type="radio" value="gun-control-4" name="gun-control"/>
              </td>
              <td>
                <input type="radio" value="gun-control-5" name="gun-control"/>
              </td>
              <td className="lastAnswer">
                We need fewer.
              </td>
            </tr>
            <tr>
              <td>
                <br/>
              </td>
            </tr>
            <tr>
              <td colSpan="7"><b>Assisted Suicide</b></td>
            </tr>
            <tr>
              <FirstAnswer>
                It's our right.
              </FirstAnswer>
              <td>
                <input type="radio" value="euthanasia-1" name="euthanasia"/>
              </td>
              <td>
                <input type="radio" value="euthanasia-2" name="euthanasia"/>
              </td>
              <td>
                <input type="radio" value="euthanasia-3" name="euthanasia"/>
              </td>
              <td>
                <input type="radio" value="euthanasia-4" name="euthanasia"/>
              </td>
              <td>
                <input type="radio" value="euthanasia-5" name="euthanasia"/>
              </td>
              <td className="lastAnswer">
                It's not right.
              </td>
            </tr>
            <tr>
              <td>
                <br/>
              </td>
            </tr>
            <tr>
              <td colSpan="7"><b>Illegal Immigration</b></td>
            </tr>
            <tr>
              <FirstAnswer>
                Let them in!
              </FirstAnswer>
              <td>
                <input type="radio" value="illegal-immigration-1" name="illegal-immigration"/>
              </td>
              <td>
                <input type="radio" value="illegal-immigration-2" name="illegal-immigration"/>
              </td>
              <td>
                <input type="radio" value="illegal-immigration-3" name="illegal-immigration"/>
              </td>
              <td>
                <input type="radio" value="illegal-immigration-4" name="illegal-immigration"/>
              </td>
              <td>
                <input type="radio" value="illegal-immigration-5" name="illegal-immigration"/>
              </td>
              <td className="lastAnswer">
                Keep them out!
              </td>
            </tr>
            <tr>
              <td>
                <br/>
              </td>
            </tr>
            <tr>
              <td colSpan="7"><b>Standardized Testing</b></td>
            </tr>
            <tr>
              <FirstAnswer>
                Is effective
              </FirstAnswer>
              <td>
                <input type="radio" value="standardized-testing-1" name="standardized-testing"/>
              </td>
              <td>
                <input type="radio" value="standardized-testing-2" name="standardized-testing"/>
              </td>
              <td>
                <input type="radio" value="standardized-testing-3" name="standardized-testing"/>
              </td>
              <td>
                <input type="radio" value="standardized-testing-4" name="standardized-testing"/>
              </td>
              <td>
                <input type="radio" value="standardized-testing-5" name="standardized-testing"/>
              </td>
              <td className="lastAnswer">
                Is not effective
              </td>
            </tr>
          </tbody>
        </table>
        <input type="submit" value="Submit"/>
      </form> 
    </div>
  );
}
export default Questionnaire;
