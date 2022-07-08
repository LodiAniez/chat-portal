import type { NextPage } from 'next'
import { SmileyIcon } from '../components/icons/smiley'
import { AttachmentIcon } from '../components/icons/attachment'
import { MicIcon } from '../components/icons/mic'
import { SendIcon } from '../components/icons/send'
import { VideoIcon } from '../components/icons/video'
import { io, Socket } from "socket.io-client"
import { listeners } from '../utils/listeners'

const Home: NextPage = () => {
	const socket: Socket = io("http://localhost:8000")

	listeners(socket)
	return (
		<div className='w-screen h-screen bg-gray-400'>

			<div className="container mx-auto h-screen flex items-center justify-center">
				<div className="max-w-2xl border rounded">
					<div>
						<div className="w-full">
							<div className='relative w-full flex justify-between px-3 border-b border-gray-300 bg-gray-200'>
								<div className="relative flex items-center p-3">
									<img className="object-cover w-10 h-10 rounded-full"
										src="https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083383__340.jpg" alt="username" />
									<span className="block ml-2 font-bold text-gray-600">Emma</span>
									<span className="absolute w-3 h-3 bg-green-600 rounded-full left-10 top-3"></span>
								</div>

								<button>
									<VideoIcon />
								</button>
							</div>
							<div className="relative w-full p-6 overflow-y-auto h-[40rem] bg-gray-200">

								<ul className="space-y-2">
									<li className="flex justify-start">
										<div className="relative max-w-xl px-4 py-2 text-gray-700 bg-blue-300 rounded shadow">
											<span className="block">Hi</span>
										</div>
									</li>
									<li className="flex justify-end">
										<div className="relative max-w-xl px-4 py-2 text-gray-700 bg-gray-100 rounded shadow">
											<span className="block">Hiiii</span>
										</div>
									</li>
									<li className="flex justify-end">
										<div className="relative max-w-xl px-4 py-2 text-gray-700 bg-gray-100 rounded shadow">
											<span className="block">how are you?</span>
										</div>
									</li>
									<li className="flex justify-start">
										<div className="relative max-w-xl px-4 py-2 text-gray-700 bg-blue-300 rounded shadow">
											<span className="block">Lorem ipsum dolor sit, amet consectetur adipisicing elit. </span>
										</div>
									</li>
								</ul>

							</div>

							<div className="flex items-center justify-between w-full p-3 border-t border-gray-300 bg-gray-200">
								<button>
									<SmileyIcon />
								</button>
								<button>
									<AttachmentIcon />
								</button>

								<input type="text" placeholder="Message"
									className="block w-full py-2 pl-4 mx-3 bg-gray-100 rounded-full outline-none focus:text-gray-700"
									name="message" required />
								<button>
									<MicIcon />
								</button>
								<button type="submit">
									<SendIcon />
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home
