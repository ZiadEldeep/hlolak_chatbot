import { useContext } from "react";
import { assets } from "../../assets/assets";
import "./main.css";
import { Context } from "../../context/Context";
export default function Main () {
  const { onSend, recentPrompt, showResult, loading, resultData, setInput, input } = useContext( Context );
  return (
    <div className={ "main" }>
      <div className={ "nav" }>
        <img src={ assets.portfolio } />
        <p>Hlolak Chatbot</p>
      </div>
      <div className={ "main-container" }>
        { !showResult
          ? <>
            <div className={ "greet" }>
              <p><span>Hello, Client</span></p>
              <p>How can I help you today?</p>
            </div>

            <div className={ "cards" }>
              <div className={ "card" }>
                <p>Let us help you in choosing your research</p>
                <img src={ assets.compass_icon } />
              </div>
              <div className={ "card" }>
                <p>Briefly summarize this concept: urban planning</p>
                <img src={ assets.bulb_icon } />
              </div>
              <div className={ "card" }>
                <p>Brainstorm team bonding activities for our work retreat</p>
                <img src={ assets.message_icon } />
              </div>
              <div className={ "card" }>
                <p>Let this chatbot help you in coding and choosing your research field</p>
                <img src={ assets.code_icon } />
              </div>
            </div>
          </>
          : <div className={"result"}>
            <div className={ "result-title" }>
              <img src={ assets.portfolio_bg } />
              <p>{recentPrompt } ?</p>
            </div>

            <div className={ "result-data" } style={{overflow:"auto"}}>
              <img src={ assets.portfolio } />
              { loading
                ? <div className={"loader"}>
                  <hr/>
                  <hr/>
                  <hr/>
                </div>
                :<p dangerouslySetInnerHTML={ { __html: resultData } }></p>
              }
              
            </div>
          </div>
        }
        <div className={ "main-bottom" }>
          <div className={ "search-box" }>
            <input onChange={ ( e ) => setInput( e.target.value ) } value={ input } type={ "text" } placeholder={ "Enter What You Want To Search For" } />
            <div>
              {/* <img className={"gallery"} src={ assets.gallery_icon } />
              <img className={"mic"} src={ assets.mic_icon } /> */}
              <img onClick={ () => onSend() } src={ assets.send_icon } />
            </div>
          </div>
          <div className={ "bottom-info" }>
          </div>
        </div>
      </div>
    </div>
  );
}
