export const Homepage = () => {
    return (
        <main>
            <section id="promo-banner">
                <h1>Welcome Little Lemon</h1>
                <p>Discover our delicious cuisine and exceptional service.</p>
                <a href="#" class="button">Explore Menu</a>
                <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    alt="Delicious Food" />
            </section>
            <section id="food-section">
                <article>
                    <img src="https://www.themediterraneandish.com/wp-content/uploads/2021/02/fried-calamari-recipe-7.jpg"
                        alt="Fried Calamari" />
                    <h2>
                        Fried Calamari
                        <span class="badge">New</span>
                    </h2>
                    <p>Squid, Buttermilk</p>
                    <a href="#" class="button">Order Now</a>
                </article>
                <article>
                    <img src="https://www.inspiredtaste.net/wp-content/uploads/2019/07/Crispy-Falafel-Recipe-1200.jpg"
                        alt="Falafel" />
                    <h2>Falafel</h2>
                    <p>Chickpea, herbs, and spices.</p>
                    <a href="#" class="button">Order Now</a>
                </article>
                <article>
                    <img src="https://media.self.com/photos/6138da5f70d7c9e81f81a59f/master/pass/1-pasta-salad-italian-dressing.jpg"
                        alt="Pasta Salad" />
                    <h2>Pasta Salad</h2>
                    <p>Lettuce, vegetables, and mozzarella</p>
                    <a href="#" class="button">Order Now</a>
                </article>
            </section>
        </main>
    );
}