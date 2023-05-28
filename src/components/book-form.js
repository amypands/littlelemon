import { useState } from "react";

export const BookForm = (props) => {
    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");
    const [email, setEmail] = useState("");
    const [tel, setTel] = useState("");
    const [people, setPeople] = useState(1);
    const [date, setDate] = useState("");
    const [occasion, setOccasion] = useState("");
    const [preferences, setPreferences] = useState("");
    const [comments, setComments] = useState("");

    const [finalTime, setFinalTime] = useState(
        props.availableTimes.map((times) => <option key={times}>{times}</option>)
    );

    const handleDateChange = (e) => {
        setDate(e.target.value);

        const stringify = e.target.value;
        const date = new Date(stringify);

        props.updateTimes(date);

        setFinalTime(props.availableTimes.map((times) => <option key={times}>{times}</option>));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform additional form submission logic or API calls here
    };

    return (
        <form className="reservation-form" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="fName">First Name</label> <br></br>
                <input
                    type="text"
                    id="fName"
                    placeholder="First Name"
                    required
                    minLength={2}
                    maxLength={50}
                    pattern="[A-Za-z\s]+"
                    title="Please enter a valid first name (only letters and spaces allowed)"
                    value={fName}
                    onChange={(e) => setFName(e.target.value)}
                ></input>
            </div>

            <div>
                <label htmlFor="lName">Last Name</label> <br></br>
                <input
                    type="text"
                    id="lName"
                    placeholder="Last Name"
                    required
                    minLength={2}
                    maxLength={50}
                    pattern="[A-Za-z\s]+"
                    title="Please enter a valid last name (only letters and spaces allowed)"
                    value={lName}
                    onChange={(e) => setLName(e.target.value)}
                ></input>
            </div>

            <div>
                <label htmlFor="email">Email</label> <br></br>
                <input
                    type="email"
                    id="email"
                    placeholder="Email"
                    required
                    minLength={4}
                    maxLength={200}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                ></input>
            </div>

            <div>
                <label htmlFor="phonenum">Phone Number</label> <br></br>
                <input
                    type="tel"
                    id="phonenum"
                    placeholder="(xxx)-xxx-xxxx"
                    required
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    title="Please enter a valid phone number (e.g., xxx-xxx-xxxx)"
                    value={tel}
                    onChange={(e) => setTel(e.target.value)}
                ></input>
            </div>

            <div>
                <label htmlFor="people">Number of People</label> <br></br>
                <input
                    type="number"
                    id="people"
                    placeholder="Number of People"
                    required
                    min={1}
                    max={100}
                    value={people}
                    onChange={(e) => setPeople(e.target.value)}
                ></input>
            </div>

            <div>
                <label htmlFor="date">Select Date</label> <br></br>
                <input
                    type="date"
                    id="date"
                    required
                    value={date}
                    onChange={handleDateChange}
                ></input>
            </div>

            <div>
                <label htmlFor="time">Select Time</label> <br></br>
                <select id="time" required>
                    {finalTime}
                </select>
            </div>

            <div>
                <label htmlFor="occasion">Occasion</label> <br></br>
                <select
                    id="occasion"
                    value={occasion}
                    onChange={(e) => setOccasion(e.target.value)}
                >
                    <option>None</option>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                    <option>Engagement</option>
                    <option>Other</option>
                </select>
            </div>

            <div>
                <label htmlFor="preferences">Seating preferences</label> <br></br>
                <select
                    id="preferences"
                    value={preferences}
                    onChange={(e) => setPreferences(e.target.value)}
                >
                    <option>None</option>
                    <option>Indoors</option>
                    <option>Outdoor (Patio)</option>
                    <option>Outdoor (Sidewalk)</option>
                </select>
            </div>

            <div>
                <label htmlFor="comments">Additional Comments</label> <br></br>
                <textarea
                    id="comments"
                    rows={8}
                    cols={50}
                    placeholder="Additional Comments"
                    value={comments}
                    onChange={(e) => setComments(e.target.value)}
                ></textarea>
            </div>

            <div>
                <br></br>
                <small>
                    <p>
                        Note: You cannot edit your reservation after submission. Please double-check your answer before submitting
                        your reservation request.
                    </p>
                </small>
                <button type="submit" className="action-button">
                    Book Table
                </button>
            </div>
        </form>
    );
};
