import Download from '../assets/download'
import html2canvas from 'html2canvas';

const ScreenshotButton = () => {
    const handleScreenshot = () => {
      html2canvas(document.body, {
        scrollX: 0, // Capture the full width of the page
        scrollY: -window.scrollY, // Adjust for any page scroll
        useCORS: true, // Handle cross-origin content (like images from other domains)
        allowTaint: true, // Allow tainting if content is from different origins
      }).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.href = imgData;
        link.download = 'screenshot.png';
        link.click();
      });
    };
  
    return (
      <button onClick={handleScreenshot} className="flex items-center border border-[#044E97] text-[#044E97] px-4 py-2 rounded transition duration-300 ease-in-out hover:bg-[#044E97] hover:text-white hover:scale-105">
        <Download className="mr-2" /> Download Screenshot
      </button>
    );
  };
  
  export default ScreenshotButton;
