
$('#team').on('click',function(){
    var value = ($(this).val());
    if(value == 1 ){
      // var home = ($('.detailmenu')[0].textContent);
    //   HEADER
      $('#hometitle').text('Trang chủ');
      $('#contacttitle').text('Liên lạc');
    //   SECTION 1
      $('#maintitle').text('Metacoders là một nhóm nhà phát triển hạng S của Việt Nam sẽ thúc đẩy sự phát triển của các công ty khởi nghiệp.');
      $('#maintitledetail').text('Chúng tôi làm việc như một nhóm lập trình từ xa cho các công ty khởi nghiệp tên lửa của Hàn Quốc. Tham gia với tư cách thành viên nhóm lâu dài hơn là thuê ngoài.');
    //  SECTION 2
      $('#qoute').text("\"Mang đến cho bạn chất lượng trải nghiệm tốt nhất\"")
    // SECTION 3
    $('#accor1').text("Metacoders là một nhóm nhà phát triển hạng S của Việt Nam sẽ thúc đẩy sự phát triển của các công ty khởi nghiệp.")
    $('#accor1-dt1').text("Quản lý sản phẩm lâu dài với tư cách là một thành viên trong nhóm, không chỉ là một dự án thuê ngoài một lần.")
    $('#accor1-dt2').text("Phát triển mà chỉ thực hiện các chức năng mà không hiểu sản phẩm chỉ là những lập trình viên bình thường làm. Tất nhiên, sự phát triển của các chức năng phải được hoàn thành.")
    $('#accor1-dt3').text("Nếu có nhiều dự án khác nhau, tôi có thể làm việc theo những dự án mà tôi muốn.")
    $('#accor1-dt4').text("Metacoders sẽ là một cửa sổ để kết nối với các công ty khởi nghiệp tên lửa, bất kể khu vực hoặc ngôn ngữ. Khi Metacoders phát triển và tạo ra nhiều thành công hơn, các tùy chọn có thể khác nhau.")


    $('#accor2').text("Bạn có thể làm việc với những thành viên tốt nhất trong nhóm.")
    $('#accor2-dt1').text("Có những lập trình viên từ Metacoders không ngừng cố gắng phát triển.")
    $('#accor2-dt2').text("Các lập trình viên có thể phát triển nhanh chóng bằng cách chia sẻ kiến thức và đưa ra phản hồi về công nghệ. Hãy tưởng tượng có hàng trăm lập trình viên như vậy.")
    $('#accor2-dt3').text("Các thành viên trong nhóm của một công ty khởi nghiệp nước ngoài đang phát triển")
    $('#accor2-dt4').text("Sản phẩm không thể được tạo ra bởi một mình lập trình viên. Không ai có thể trải qua quá trình làm việc cùng với các thành viên trong nhóm có đầy đủ kinh nghiệm, khả năng và sự bền bỉ của địa phương, chẳng hạn như các nhà hoạch định và nhà thiết kế.")
    $('#accor2-dt5').text("PM có hỗ trợ ngoại ngữ hỗ trợ giao tiếp với các thành viên trong nhóm nước ngoài.")
    $('#accor2-dt6').text("Các PM có thể nói tiếng Việt và tiếng Hàn sẽ tham gia các cuộc họp với các thành viên trong nhóm địa phương và tạo ra các nhiệm vụ để đảm bảo giao tiếp không bị gián đoạn. Lập trình viên có thể tập trung vào việc khắc phục sự cố.")
    $('#accor2-dt7').text("Các lập trình viên cao cấp dẫn đầu trong quá trình phát triển.")
    $('#accor2-dt8').text("Những vấn đề khó lường luôn làm phiền chúng ta. Trong tình huống như vậy, kinh nghiệm và trải nghiệm cho thấy giá trị to lớn. Nhóm phát huy sức mạnh lớn nhất của mình khi tất cả các thành viên trong nhóm đều cân bằng trong tất cả các lĩnh vực. Nhóm phát triển củaetacodus có ít nhất một nhà phát triển cấp cao với ít nhất năm năm kinh nghiệm trong mỗi nhóm.")
   
    $('#accor3').text("Cung cấp một môi trường phát triển nhanh chóng.")
    $('#accor3-dt1').text("Chúng tôi sẽ tổ chức hackathon và hội thảo kỹ thuật thường xuyên.")
    $('#accor3-dt2').text("Ngay cả trong hệ thống công nghệ quen thuộc, những thay đổi về phương pháp phát triển và thư viện được sử dụng vẫn tiếp tục xảy ra. Bạn không thể trưởng thành nếu không tiếp xúc với thế giới trong khi giải quyết các vấn đề của thế giới.")
    $('#accor3-dt3').text("Chúng tôi thực hiện các bài giảng và thực hành về các công nghệ mới như blockchain và AI.")
    $('#accor3-dt4').text("Chỉ cần trải nghiệm những công nghệ mới sẽ phát triển trong tương lai có thể ảnh hưởng rất nhiều đến sự nghiệp của các lập trình viên. Luôn có một công nghệ có giá trị gia tăng cao xuất hiện trong dòng chảy công nghệ.")


    // SECTION 4 
    $('#currentproject').text("Hiện đang trong quá trình");
    $('#currentproject-dt').text("Metacoders đã làm điều này cho đến nay.");
    $('#currentproject-dt1').text("Là người muốn giúp lan tỏa năng lực của các lập trình viên Việt Nam ra thế giới.");
    $('#currentproject-dt2').text("Ai muốn cùng nhau phát triển bằng cách tham gia vào một dự án thay đổi thế giới.");
    $('#currentproject-dt3').text("Những người thích tư duy logic và giải quyết vấn đề");

    // SECTION 5
    $('#program').text("Nhóm lập trình")
    $('#program-dt').text("Tham gia cùng nhóm lập trình của startup tên lửa để hoàn thiện sản phẩm.")

    
    $('#rocket').text("Khởi động tên lửa")
    $('#rocket-dt').text("Kết nối với các công ty khởi nghiệp tên lửa đã thu hút hơn 10 triệu đô la.")

    $('#mul').text("Đa ngôn ngữ và văn hóa")
    $('#mul-dt').text("Giải quyết các hạn chế về ngôn ngữ và sự khác biệt về văn hóa giữa các thành viên trong nhóm và hỗ trợ cộng tác từ xa.")

    
    $('#job').text("Các cơ hội nghề nghiệp")
    $('#job-dt').text("Tìm cách giải quyết sự mất cân bằng của các cơ hội việc làm theo khu vực trong lĩnh vực lập trình.")

    $('#col').text("Sự hợp tác")
    $('#col-dt').text("Cung cấp môi trường phát triển của nhà phát triển và mức lương tốt nhất thông qua sự hợp tác với các thành viên nhóm S-class ..")
   
    $('#work').text("Môi trường làm việc")
    $('#work-dt').text("Môi trường làm việc hiện đại với cơ sở vật chất tiện nghi, trang bị đầy đủ dụng cụ làm việc.")

    // SECTION 6
    $('#current').text("Hiện đang trong quá trình")
    $('#current-dt').text("Metacoders đã làm điều này cho đến nay.")

    $('#time1').text("Chúng tôi đã ký thỏa thuận kinh doanh với ĐHQGHN và xác nhận ITP (Khu Công nghệ Thông tin) là cơ sở.")
    $('#time1-dt1').text("Chúng tôi tổ chức khóa học một năm cho sinh viên tốt nghiệp Đại học CSND của ĐHQGHN.")
    $('#time1-dt2').text("Trong vòng ba năm, một cộng đồng Metacodus gồm 1.000 nhà phát triển sẽ ra đời.")

    $('#time2').text("Chúng tôi quyết định cung cấp hỗ trợ kỹ thuật cho Green Labs (agTech) với tư cách là khách hàng đầu tiên.")
    $('#time2-dt1').text("홈페이지")
    $('#time2-dt2').text("Phòng thí nghiệm xanh cách mạng hóa việc ăn uống của con người theo cách bền vững.")
    $('#time2-dt3').text("Doanh thu hàng năm là 100 tỷ Won (2021) 500 Tỷ Won (2022)")

    $('#time3').text("Chúng tôi đang liên hệ với một công ty khởi nghiệp đang phát triển nhanh sẽ trở thành khách hàng bổ sung.")
    $('#time4').text("Green Labs, SNU, D-Camp, Hanmi Engineering & Construction, #HASHED, v.v. đã ký kết hợp tác")

    // SECTION 7
    $('#postion1').text("Một vị trí đang tuyển dụng");
    $('#postion1-dt').text("Trở thành thành viên của nhóm Metacoders.");

    $('#juni').text("Quản lý dự án(한국어 필수)");
    $('#fe').text("Lập trình viên Front-end ");
    $('#be').text("Lập trình viên Back-end ");
    $('#applynow').text("Ứng tuyển ngay");
    $('#applynow2').text("Ứng tuyển ngay");
    $('#applynow3').text("Ứng tuyển ngay");

    

}


    else{
        //   HEADER
        $('#hometitle').text('Home');
        $('#contacttitle').text('Contact');
        //   SECTION 1
        $('#maintitle').text('Metacoders is a Vietnamese S-class developer team that will boost the growth of startups.');
        $('#maintitledetail').text('We work as a remote programming team for Korean rocket start-ups. Join as a long-term team member rather than outsourcing.');
        //  SECTION 2
        $('#qoute').text("\"Bring you the best quality of experience\"")
        // SECTION 3
        $('#accor1').text("Metacoders is a Vietnamese S-class developer team that will boost the growth of startups.")
        $('#accor1-dt1').text("Manage products long-term as a team member, not just a one-time outsourcing project.")
        $('#accor1-dt2').text("Development that only implements functions without understanding the product is just normal coders do. Of course, the development of functions must be accomplished.")
        $('#accor1-dt3').text("If there are various projects, I can work on the projects I want.")
        $('#accor1-dt4').text("Metacoders will be a window to connect with rocket startups, regardless of region or language. As Metacoders grows and creates more success, options can vary.")

        $('#accor2').text("You can work with the best team members.")
        $('#accor2-dt1').text("There are programmers from Metacoders who never stop trying to grow.")
        $('#accor2-dt2').text("Programmers can grow fast by sharing knowledge and giving feedback on technology. Imagine having hundreds of programmers like that.")
        $('#accor2-dt3').text("Team members of a growing foreign startup")
        $('#accor2-dt4').text("The product cannot be created by the programmer alone. No one can experience the process of working together with team members full of local experiences, abilities, and persistence, such as planners and designers.")
        $('#accor2-dt5').text("Foreign language-enabled PM supports communication with foreign team members.")
        $('#accor2-dt6').text("PMs who can speak Vietnamese and Korean will attend meetings with local team members and create tasks to ensure communication is not disrupted. Programmers can focus on troubleshooting.")
        $('#accor2-dt7').text("Senior programmers lead the way in development.")
        $('#accor2-dt8').text("Unpredictable problems always bother us. In such a situation, experience and experience show great value. The team exerts its greatest power when all team members are balanced in all areas.Metacodus's development team has at least one senior developer with at least five years of experience in every team.")

        $('#accor3').text("Provides a fast growth environment.")
        $('#accor3-dt1').text("We will hold hackathon and technical seminars regularly.")
        $('#accor3-dt2').text("Even within the familiar technology stack, changes in development methods and libraries used continue to occur. You can't grow up if you're out of touch with the world while solving the world's problems.")
        $('#accor3-dt3').text("We conduct lectures and practice on new technologies such as blockchain and AI.")
        $('#accor3-dt4').text("Just experiencing new technologies that will grow in the future can greatly affect the career of programmers. There is always a high value-added technology that comes to mind in the flow of technology.")


        // SECTION 4 
        $('#currentproject').text("Currently in process");
        $('#currentproject-dt').text("Metacoders has done this so far.");
        $('#currentproject-dt1').text("Who wants to help spread the capabilities of Vietnamese developers to the world.");
        $('#currentproject-dt2').text("Who wants to grow together by participating in a world-changing project.");
        $('#currentproject-dt3').text("People who enjoy logical thinking and problem solving");

        // SECTION 5
        $('#program').text("Programming Team")
        $('#program-dt').text("Joins the programming team of the rocket startup to complete the product.")

        $('#rocket').text("Rocket Startups ")
        $('#rocket-dt').text("Connects with rocket startups that have attracted more than 10 million $.")

        $('#mul').text("Multi language and cultural")
        $('#mul-dt').text(" Addresses language limitations and cultural differences among team members and supports remote collaboration.")

        
        $('#job').text("Job Opportunities")
        $('#job-dt').text("Seeks to address the imbalance of regional job opportunities in the area of programming.")

        $('#col').text("Collaboration")
        $('#col-dt').text("Provides the developer's growth environment and the best salary through collaboration with S-class team members..")

        $('#work').text("Working Environment ")
        $('#work-dt').text("Modern working environment with comfortable facilities, fully equipped with working tools.")

        // SECTION 6
        $('#current').text("Currently in process")
        $('#current-dt').text("Metacoders has done this so far.")

        $('#time1').text("We have signed a business agreement with VNU and confirmed ITP (Information Technology Park) as a base.")
        $('#time1-dt1').text("We Conduct A One-Year Course For VNU CS Undergraduate Graduates.")
        $('#time1-dt2').text("Within Three Years, A Metacodus Community Of 1,000 Developers Will Be Born.")

        $('#time2').text("We decided to provide technical support to Green Labs (agTech) as the first client.")
        $('#time2-dt1').text("홈페이지")
        $('#time2-dt2').text("Green Labs Revolutionizes Human Eating In A Sustainable Way.")
        $('#time2-dt3').text("Annual Sales Of 100 Billion Won (2021) 500 Billion Won (2022)")

        $('#time3').text("We are contacting a fast-growing startup that will become an additional client.")
        $('#time4').text("Green Labs, SNU, D-Camp, Hanmi Engineering & Construction, #HASHED, etc. signed a partnership")

        // SECTION 7
        $('#postion1').text("A position under recruitment");
        $('#postion1-dt').text("Become a member of the Metacoders team.");
        
        $('#juni').text("Junior Project Manager(한국어 필수)");
        $('#fe').text("Front-end Developer");
        $('#be').text("Back-end Developer");
        $('#applynow').text("Apply now");
        $('#applynow2').text("Apply now");
        $('#applynow3').text("Apply now");

        
    }
});