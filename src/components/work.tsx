import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import { ReactNode, Children, useState } from "react"

type CarouselProps = {
  children?: ReactNode;
};

const CarouselItem = ({ children }: CarouselProps) => {
  return (
    <div className="carousel-item">
      { children }
    </div>
  )
}

const Carousel = ({ children } : CarouselProps) => {
  const [activeIndex, setActiveIndex] = useState<number>(0)

  const updateIndex = (newIndex: number) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= Children.count(children)) {
       newIndex = Children.count(children) - 1;
    }

    setActiveIndex(newIndex);
  }

  return (
    <div className="carousel">
      <div className="inner"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {Children.map(children, (child, index) => child)}
      </div>
      <div className="indicators">
        <button
          onClick={() => updateIndex(activeIndex - 1)}
        />
        <button
          onClick={() => updateIndex(activeIndex + 1)}
        />
      </div>
    </div>
  )
}

const Work = () => {
  return (
    <section id="work" className="work">
      <div className="wrap">
        <div className="title">
          <h2>#3. What I've Maked</h2>
        </div>

        <div className="content">
          <div>
            <div className="gallery">
              {/* <Carousel>
                <CarouselItem>
                  <StaticImage src="../images/nasa.jpg" alt="nano" />
                </CarouselItem>
                <CarouselItem>
                  <StaticImage src="../images/nasa.jpg" alt="nano" />
                </CarouselItem>
              </Carousel> */}
            </div>
            <div className="desc">
              <h2>## NHK Global Business System migration <span>@ FPT Software.</span></h2>
              <p>
                Migrate legacy system from fujitsu mainframe to open system on cloud computing (GCP)
              </p>  
              <ul>
                <li><p>Cobol, Jcl, etc...</p></li>
                <li><p>GCP</p></li>
                <li><p>JAVA</p></li>
              </ul>
            </div>
          </div>
          <div>
            <div className="gallery">
              {/* <Carousel>
                <CarouselItem>
                  <StaticImage src="../images/work-app-01.png" alt="app" />
                </CarouselItem>
              </Carousel> */}
            </div>
            <div className="desc">
              <h2>## Car Snapshot App <span>@ IDOM Inc.</span></h2>
              <p>
                This project helps standardize the process of car photography and takes the quality of the images to the next level as well as improve feedbacks from end users.
              </p>
              <ul>
                <li><p>Swift</p></li>
                <li><p>AWS Amplify</p></li>
                <li><p>NextJS</p></li>
                <li><p>GraphQL</p></li>
              </ul>
            </div>
          </div>
          <div>
            <div className="gallery">
              {/* <Carousel>
                <CarouselItem>
                  <StaticImage src="../images/nasa.jpg" alt="nano" />
                </CarouselItem>
                <CarouselItem>
                  <StaticImage src="../images/nasa.jpg" alt="nano" />
                </CarouselItem>
                <CarouselItem>
                  <StaticImage src="../images/nasa.jpg" alt="nano" />
                </CarouselItem>
              </Carousel> */}
            </div>
            <div className="desc">
              <h2>## Car Price Calculate API <span>@ IDOM Inc.</span></h2>
              <p>
                An API that uses AI technology to return used car prices from some given information.
              </p>  
              <ul>
                <li><p>Python, Ruby on Rails, R</p></li>
                <li><p>Jupyter notebook</p></li>
                <li><p>GCP AutoML</p></li>
                <li><p>AWS Sagemaker</p></li>
                <li><p>AWS EKS</p></li>
                <li><p>AWS Codepipeline</p></li>
                <li><p>sklearn</p></li>
                <li><p>Docker, K8S</p></li>
              </ul>
            </div>
          </div>
          <div>
            <div className="gallery">
              {/* <Carousel>
                <CarouselItem>
                  <StaticImage src="../images/work-frima-01.png" alt="frima" />
                </CarouselItem>
              </Carousel> */}
            </div>
            <div className="desc">
              <h2>## Gulliver Frima <span>@ IDOM Inc.</span></h2>
              <a href="https://gulliver-frima.com/">https://gulliver-frima.com/</a>
              <p>
                A C2C e-commerce website. Making it possible for customers and customers to buy and sell used cars in Japan.
              </p>
              <ul>
                <li><p>Ruby on Rails</p></li>
                <li><p>CircleCI</p></li>
                <li><p>AWS Elastic Beanstalk</p></li>
                <li><p>Docker</p></li>
              </ul>
            </div>
          </div>
          <div>
            <div className="gallery">
              {/* <Carousel>
                <CarouselItem>
                  <StaticImage src="../images/work-mobi1-01.png" alt="mobi1" />
                </CarouselItem>
              </Carousel> */}
            </div>
            <div className="desc">
              <h2>## Mobi1 <span>@ IDOM Inc.</span></h2>
              <a href="https://mobi1.jp/">https://mobi1.jp/</a>
              <p>
                A B2B e-commerce website. Sell the used car to another company for a lower price. This website is only accessible by members located in Japan.
              </p>
              <ul>
                <li><p>Ruby on Rails</p></li>
                <li><p>Github Action</p></li>
                <li><p>AWS ECS</p></li>
                <li><p>Docker</p></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Work
