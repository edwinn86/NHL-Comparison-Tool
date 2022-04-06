import { useState, useEffect } from 'react';
import FormComponent from './PlayerFormComponent';
import TeamFormComponent from './TeamFormComponent';



function FormBuilder(props) {


    const [formType, updateType] = useState(props.type);


    if (formType !== props.type) {

        updateType(props.type);
    }





    if (formType === 'playerForms') {


        let rows = [];

        for (let i = 0; i <= props.formCount; i++) {

            if (i > 3) {
                break;
            }


            rows.push(


                <FormComponent formType={formType} formCount={props.formCount} formid={i + 1} addCount={props.addCount} resetCount={props.resetCount} />

            );
        }



        return (
            <section>
                <div className='container'>


                    <div className="columns is-variable">

                        {rows}

                    </div>

                </div>
            </section>

        );

    } else if (formType === "playerCards") {

        let rows = [];

        for (let i = 0; i < props.formCount; i++) {


            rows.push(


                <FormComponent formType={formType} formCount={props.formCount} formid={i + 1} addCount={props.addCount} />

            );
        }

        return (
            <section>
                <div className='container'>


                    <div className="columns is-variable">

                        {rows}

                    </div>

                </div>
            </section>

        );



    } else if (formType === 'teamForms') {


        let rows = [];

        for (let i = 0; i <= props.formCount; i++) {

            if (i > 3) {
                break;
            }

            rows.push(



                <TeamFormComponent formType={formType} formCount={props.formCount} formid={i + 1} addCount={props.addCount} />



            );


        }


        return (

            <section>
                <div className="container">

                    <div className="columns is-variable">


                        {rows}


                    </div>


                </div>
            </section>

        );



    } else {

        let rows = [];

        for (let i = 0; i < props.formCount; i++) {


            rows.push(



                <TeamFormComponent formType={formType} formCount={props.formCount} formid={i + 1} addCount={props.addCount} />



            );


        }


        return (

            <section>
                <div className="container">

                    <div className="columns is-variable">


                        {rows}


                    </div>


                </div>
            </section>

        );


    }

}

export default FormBuilder