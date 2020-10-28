import React from 'react';
import { Link } from 'react-router-dom';
import testQuest from '../../testQuest';
import Test from '../../components/Test/Test';
import Header from '../../components/Header/Header';
import WhiteForm from '../../components/WhiteForm/WhiteForm';

class TestsPage extends React.Component {
  state = {
    testingMod: null,
    name: null,
    ans: [null, null, null, null],
    mistakes: null,
    alertType: 0
  };
  openTest = () => {
    this.setState({testingMod:!this.state.testingMod})
    console.log("Функция закрытия теста вызвана.");
  }
  answerTest = () => {
    this.setState({alertType : 0})
    this.setState({mistakes : 0})
    const {testingMod, name, ans, mistakes, alertType} = this.state;
    let miss = 0;
    this.state.ans.forEach((elem, i) => {
      if (elem != testQuest[i].trueAns) {console.log(`Ошибка в задание ${i}`); miss++;}
    });
    this.setState({mistakes : miss});
    console.log("mistakes: "+mistakes)
    if (mistakes <= 0) this.setState({alertType : 2})
    else this.setState({alertType : 1})

  }
  radioChange = event => {
      const ansId = event.target.value;
      const id = event.target.name;
      this.state.ans[id] = ansId;
      console.log('id: '+ id, 'ansId: ' + this.state.ans[id]);
  };

    render() {
        const userData = this.props.location.state;
        const {testingMod, name, ans, mistakes, alertType} = this.state;
        const baseUrl = process.env.PUBLIC_URL; // will be /hypercomp
        return (
          <div className="col-12 col-md-8">
            <Header>
              <div>Здраствуйте, {userData.name}</div>
              <Link to={baseUrl + "/"}>Выйти</Link>
            </Header>
              <WhiteForm>
              {console.log(testingMod)}
              {testingMod ? (
              <form>
              {testQuest.map((quest) => (
                            <Test key={quest.id} answerTest={this.radioChange} closeTest={this.openTest} quest={quest} />
                        ))}
              {alertType === 2 ? (<div className="alert alert-success alert-dismissible fade show" role="alert">
                <strong>Отлично!</strong> Тест выполнен без ошибок.
              </div>) : (null)}
              {alertType === 1 ? (<div className="alert alert-danger alert-dismissible fade show" role="alert">
                <strong>Ошибки: {mistakes}</strong> Перепройдите тест снова.
              </div>) : (null)}

              <a onClick={this.answerTest} className="btn btn-primary">Отправить</a>
              <a onClick={this.openTest} className="btn btn-danger">Закрыть</a>
              </form>
              ) : (
              <div>
                Ваш стаж - {userData.description}
                <br/>
                Последнее тестирование - {userData.lastTest}
                <br/>
                <div className="d-flex justify-content-center pt-2">
                <button onClick={this.openTest} type="button" className="btn btn-success">Пройти тестирование</button>
                </div>
              </div>
            )}

              </WhiteForm>
          </div>
        );
    }
}

export default TestsPage;
