import React from "react";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./index.module.css";

import TwitterIcon from "../../../../static/icons/TwitterIcon";
import DiscordIcon from "../../../../static/icons/DiscordIcon";

export default function FooterLinkItem({ item }) {
	const { to, href, label, prependBaseUrlToHref, ...props } = item;
	const toUrl = useBaseUrl(to);
	const normalizedHref = useBaseUrl(href, { forcePrependBaseUrl: true });

	let Icon = null;

	if (label === "Discord") {
		Icon = DiscordIcon;
	}
	if (label === "Twitter") {
		Icon = TwitterIcon;
	}

	return (
		<Link
			className="footer__link-item"
			{...(href
				? {
						href: prependBaseUrlToHref ? normalizedHref : href,
				  }
				: {
						to: toUrl,
				  })}
			{...props}>
			<div className={styles.FooterLink}>
				<div className={styles.IconWrapper}>
					<Icon />
				</div>
				{label}
			</div>
		</Link>
	);
}
