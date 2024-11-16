import Feed from "@components/Feed"



const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
            Dicover and share
            <br className="max-md:hidden" />
            <span className="orange_gradient">
                AI powered prompts
            </span>
        </h1>
        <p className="desc text-center">
            Promptopia is Open-Source based tool with Prompts sharing and creating 
        </p>
        <Feed/>
    </section>
  )
}

export default Home