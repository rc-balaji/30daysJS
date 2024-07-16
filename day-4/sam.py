from PIL import Image, ImageDraw, ImageFont
import os

# Create a folder if it doesn't exist
if not os.path.exists('images'):
    os.makedirs('images')

# Function to generate and save images
def generate_images(num_images):
    for i in range(1, num_images + 1):
        # Create a new image with white background
        image = Image.new('RGB', (400, 300), color='white')
        
        # Draw text on the image
        draw = ImageDraw.Draw(image)
        text = f'Image {i}'  # Example text, you can customize this
        
        # Load a font
        font = ImageFont.load_default()  # Default font
        
        # Get text bounding box (size)
        text_width, text_height = draw.textbbox((0, 0), text, font=font)
        
        # Calculate text position
        text_x = (image.width - text_width) // 2
        text_y = (image.height - text_height) // 2
        
        # Draw text on image
        draw.text((text_x, text_y), text, fill='black', font=font)
        
        # Save the image
        image.save(f'images/Image{i}.jpg')
        print(f'Generated and saved Image{i}.jpg')

# Generate 10 images
generate_images(10)
